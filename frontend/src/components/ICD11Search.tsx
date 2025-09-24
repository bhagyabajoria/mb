import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, AlertCircle } from "lucide-react";

// Import the WHO ICD-11 ECT package and styles
import * as ECT from "@whoicd/icd11ect";
import "@whoicd/icd11ect/style.css";

// Interface for the selected entity from WHO ICD-11
export interface ISelectedEntity {
  iNo: string;
  linearizationUri: string;
  foundationUri: string;
  code: string;
  title: string;
  selectedText: string;
  searchQuery?: string;
}

interface ICD11SearchProps {
  onSelect?: (entity: ISelectedEntity) => void;
  placeholder?: string;
  label?: string;
  value?: string;
  className?: string;
}

const ICD11Search: React.FC<ICD11SearchProps> = ({
  onSelect,
  placeholder = "Search for diseases, conditions, or symptoms...",
  label = "Disease/Condition Search",
  value = "",
  className = "",
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState<ISelectedEntity | null>(
    null
  );
  const [searchValue, setSearchValue] = useState(value);
  const iNo = useRef(Math.floor(Math.random() * 10000)); // Unique instance number
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Configure the ECT only once
    if (!isInitialized) {
      const settings = {
        // WHO's official test API endpoint
        apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net",
        autoBind: false, // Manual binding for React
        // Enable flexible search
        flexisearch: true,
        // Show code in results
        showCode: true,
        // Limit results for better UX
        maxResults: 10,
      };

      const callbacks = {
        selectedEntityFunction: (entity: ISelectedEntity) => {
          console.log("ICD-11 Entity Selected:", entity);
          setSelectedEntity(entity);
          setSearchValue(entity.title);

          // Call the parent callback if provided
          if (onSelect) {
            onSelect(entity);
          }

          // Clear the search results after selection
          ECT.Handler.clear(iNo.current);
        },
        // Optional: Add error handling
        errorFunction: (error: any) => {
          console.error("ICD-11 Search Error:", error);
        },
      };

      try {
        ECT.Handler.configure(settings, callbacks);
        setIsInitialized(true);
      } catch (error) {
        console.error("Failed to configure ICD-11 ECT:", error);
      }
    }
  }, [isInitialized, onSelect]);

  useEffect(() => {
    // Bind the ECT to the input after component mounts and is initialized
    if (isInitialized && inputRef.current) {
      try {
        ECT.Handler.bind(iNo.current);
      } catch (error) {
        console.error("Failed to bind ICD-11 ECT:", error);
      }
    }

    // Cleanup on unmount
    return () => {
      if (isInitialized) {
        try {
          ECT.Handler.unbind(iNo.current);
        } catch (error) {
          console.error("Failed to unbind ICD-11 ECT:", error);
        }
      }
    };
  }, [isInitialized]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);

    // Clear selected entity if user starts typing again
    if (selectedEntity && newValue !== selectedEntity.title) {
      setSelectedEntity(null);
    }
  };

  const handleClearSelection = () => {
    setSelectedEntity(null);
    setSearchValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
    ECT.Handler.clear(iNo.current);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <Label
        htmlFor={`icd11-search-${iNo.current}`}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </Label>

      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            id={`icd11-search-${iNo.current}`}
            type="text"
            className="ctw-input pl-10 pr-10 border-2 border-muted focus:border-govt-blue transition-colors"
            placeholder={placeholder}
            value={searchValue}
            onChange={handleInputChange}
            data-ctw-ino={iNo.current}
            autoComplete="off"
          />
          {selectedEntity && (
            <button
              type="button"
              onClick={handleClearSelection}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear selection"
            >
              ×
            </button>
          )}
        </div>

        {/* Search results container - styled by ECT but we can override */}
        <div
          className="ctw-window"
          data-ctw-ino={iNo.current}
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            zIndex: 1000,
          }}
        />
      </div>

      {/* Display selected entity */}
      {selectedEntity && (
        <Card className="border-govt-green/20 bg-govt-green/5">
          <CardContent className="pt-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-govt-green mt-0.5 flex-shrink-0" />
              <div className="space-y-1 flex-grow">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-govt-blue/10 text-govt-blue"
                  >
                    {selectedEntity.code}
                  </Badge>
                  <span className="text-sm font-medium text-foreground">
                    {selectedEntity.title}
                  </span>
                </div>
                {selectedEntity.selectedText &&
                  selectedEntity.selectedText !== selectedEntity.title && (
                    <p className="text-xs text-muted-foreground">
                      Search term: "{selectedEntity.selectedText}"
                    </p>
                  )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Help text */}
      <p className="text-xs text-muted-foreground">
        Start typing to search the WHO ICD-11 database for diseases, conditions,
        and medical terms.
      </p>
    </div>
  );
};

export default ICD11Search;
