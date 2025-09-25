import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSwitcherProps {
  variant?: "default" | "compact" | "badge";
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = "default",
  className = "",
}) => {
  const { language, setLanguage, t, isHindi } = useLanguage();

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  if (variant === "badge") {
    return (
      <Badge
        variant="outline"
        className={`cursor-pointer hover:bg-primary/10 transition-colors ${className}`}
        onClick={handleLanguageToggle}
      >
        <Globe className="w-3 h-3 mr-1" />
        {language === "en" ? "EN" : "हि"}
      </Badge>
    );
  }

  if (variant === "compact") {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={handleLanguageToggle}
        className={`flex items-center gap-1 ${className}`}
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{language === "en" ? "EN" : "हि"}</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={handleLanguageToggle}
      className={`flex items-center gap-2 ${className}`}
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "English" : "हिंदी"}</span>
      <span className="text-xs text-muted-foreground">
        {language === "en" ? "→ हि" : "→ EN"}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
