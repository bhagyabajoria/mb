import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  CheckCircle,
  Loader2,
  X,
  Stethoscope,
  Activity,
  Plus,
} from "lucide-react";
import { diseaseAPI, CustomDisease } from "@/services/customDiseaseAPI";

interface CustomDiseaseSearchProps {
  onSelect?: (disease: CustomDisease) => void;
  placeholder?: string;
  label?: string;
  value?: string;
  className?: string;
}

const CustomDiseaseSearch: React.FC<CustomDiseaseSearchProps> = ({
  onSelect,
  placeholder = "Search diseases, conditions, or symptoms...",
  label = "Disease/Condition Search",
  value = "",
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState(value);
  const [searchResults, setSearchResults] = useState<CustomDisease[]>([]);
  const [selectedDisease, setSelectedDisease] = useState<CustomDisease | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchMode, setSearchMode] = useState<"general" | "symptoms">(
    "general"
  );
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [currentSymptom, setCurrentSymptom] = useState("");
  const [allSymptoms] = useState<string[]>(diseaseAPI.getAllSymptoms());

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Search function with debouncing
  const searchDiseases = async (query: string) => {
    if (query.length < 1) {
      setSearchResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    try {
      const results = await diseaseAPI.searchDiseases(query, 8);
      setSearchResults(results);
      setIsOpen(results.length > 0);
      setHighlightedIndex(-1);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input change with debouncing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Clear existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Clear selected disease if user is typing
    if (selectedDisease && query !== selectedDisease.name) {
      setSelectedDisease(null);
    }

    // Debounce search
    searchTimeoutRef.current = setTimeout(() => {
      searchDiseases(query);
    }, 300);
  };

  // Handle disease selection
  const handleDiseaseSelect = (disease: CustomDisease) => {
    setSelectedDisease(disease);
    setSearchQuery(disease.name);
    setIsOpen(false);
    setSearchResults([]);

    if (onSelect) {
      onSelect(disease);
    }
  };

  // Clear selection
  const handleClear = () => {
    setSelectedDisease(null);
    setSearchQuery("");
    setSearchResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Add symptom to the list
  const addSymptom = () => {
    if (currentSymptom.trim() && !symptoms.includes(currentSymptom.trim())) {
      const newSymptoms = [...symptoms, currentSymptom.trim()];
      setSymptoms(newSymptoms);
      setCurrentSymptom("");

      // Automatically search when symptoms are added
      if (newSymptoms.length > 0) {
        searchBySymptoms(newSymptoms);
      }
    }
  };

  // Remove symptom from the list
  const removeSymptom = (symptomToRemove: string) => {
    const newSymptoms = symptoms.filter((s) => s !== symptomToRemove);
    setSymptoms(newSymptoms);

    if (newSymptoms.length > 0) {
      searchBySymptoms(newSymptoms);
    } else {
      setSearchResults([]);
      setIsOpen(false);
    }
  };

  // Search diseases by symptoms
  const searchBySymptoms = async (symptomList: string[]) => {
    if (symptomList.length === 0) {
      setSearchResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    try {
      const results = await diseaseAPI.searchBySymptoms(symptomList, 10);
      setSearchResults(results);
      setIsOpen(results.length > 0);
      setHighlightedIndex(-1);
    } catch (error) {
      console.error("Symptom search error:", error);
      setSearchResults([]);
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key for adding symptoms
  const handleSymptomKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSymptom();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || searchResults.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < searchResults.length) {
          handleDiseaseSelect(searchResults[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`space-y-4 ${className}`}>
      <Label className="text-sm font-medium text-foreground">{label}</Label>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            General Search
          </TabsTrigger>
          <TabsTrigger value="symptoms" className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            Search by Symptoms
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-3 mt-4">
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                ref={inputRef}
                id="disease-search"
                type="text"
                className="pl-10 pr-10 border-2 border-muted focus:border-govt-blue transition-all duration-200"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                autoComplete="off"
              />
              {isLoading && (
                <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin text-govt-blue" />
              )}
              {!isLoading && selectedDisease && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleClear}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-4 mt-4">
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Activity className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  className="pl-10 border-2 border-muted focus:border-govt-blue transition-all duration-200"
                  placeholder="Enter a symptom (e.g., fever, headache, cough)..."
                  value={currentSymptom}
                  onChange={(e) => setCurrentSymptom(e.target.value)}
                  onKeyDown={handleSymptomKeyDown}
                />
              </div>
              <Button
                type="button"
                onClick={addSymptom}
                disabled={!currentSymptom.trim()}
                className="px-4"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {symptoms.length > 0 && (
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">
                  Selected Symptoms:
                </Label>
                <div className="flex flex-wrap gap-2">
                  {symptoms.map((symptom, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-govt-blue/10 text-govt-blue border border-govt-blue/20 hover:bg-govt-blue/20 cursor-pointer"
                      onClick={() => removeSymptom(symptom)}
                    >
                      {symptom}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Search Results Dropdown */}
      <div className="relative">
        {isOpen && searchResults.length > 0 && (
          <Card
            ref={resultsRef}
            className="absolute top-full left-0 right-0 mt-1 z-50 border-2 border-govt-blue/20 shadow-lg max-h-80 overflow-y-auto"
          >
            <CardContent className="p-0">
              {searchResults.map((disease, index) => (
                <div
                  key={disease.id}
                  className={`p-3 cursor-pointer transition-colors border-b last:border-b-0 ${
                    index === highlightedIndex
                      ? "bg-govt-blue/10 border-govt-blue/20"
                      : "hover:bg-muted/50"
                  }`}
                  onClick={() => handleDiseaseSelect(disease)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-grow space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-govt-blue/10 text-govt-blue border-govt-blue/30 text-xs"
                        >
                          {disease.icdCode}
                        </Badge>
                        <span className="font-medium text-sm text-foreground">
                          {disease.name}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">Namaste:</span>{" "}
                        {disease.namaste}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {disease.symptoms.slice(0, 3).map((symptom, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {symptom}
                          </Badge>
                        ))}
                        {disease.symptoms.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{disease.symptoms.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Stethoscope className="h-4 w-4 text-govt-blue/60 flex-shrink-0 mt-1" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* No Results Message */}
        {isOpen &&
          searchResults.length === 0 &&
          searchQuery.length > 0 &&
          !isLoading && (
            <Card className="absolute top-full left-0 right-0 mt-1 z-50 border-2 border-muted">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  No diseases found for "{searchQuery}"
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Try searching with different terms or symptoms
                </p>
              </CardContent>
            </Card>
          )}
      </div>

      {/* Selected Disease Display */}
      {selectedDisease && (
        <Card className="border-govt-green/20 bg-govt-green/5">
          <CardContent className="pt-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-govt-green mt-0.5 flex-shrink-0" />
              <div className="space-y-2 flex-grow">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge
                    variant="outline"
                    className="bg-govt-blue/10 text-govt-blue border-govt-blue/30"
                  >
                    {selectedDisease.icdCode}
                  </Badge>
                  <span className="font-medium text-foreground">
                    {selectedDisease.name}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Namaste Name:</span>{" "}
                  {selectedDisease.namaste}
                </p>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    Symptoms:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {selectedDisease.symptoms.map((symptom, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Help Text */}
      <p className="text-xs text-muted-foreground">
        Search from our curated database of diseases with ICD-11 codes and
        Ayurvedic names.
      </p>
    </div>
  );
};

export default CustomDiseaseSearch;
