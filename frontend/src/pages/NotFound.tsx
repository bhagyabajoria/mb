import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-background to-secondary/20 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="flex justify-center items-center space-x-4">
            <Logo size="lg" showText={true} to="/" />
            <LanguageSwitcher variant="compact" />
          </div>
        </div>

        {/* Error Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl mx-auto">
          <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
            <CardTitle className="text-4xl sm:text-5xl lg:text-6xl font-bold text-govt-blue mb-2">
              404
            </CardTitle>
            <div className="text-lg sm:text-xl text-foreground font-semibold">
              {t("notFound.title")}
            </div>
          </CardHeader>

          <CardContent className="text-center space-y-4 sm:space-y-6 px-4 sm:px-6 pb-6">
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              {t("notFound.message")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <Link to="/">
                  <Home className="h-4 w-4" />
                  {t("notFound.goHome")}
                </Link>
              </Button>

              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("notFound.goBack")}
              </Button>
            </div>

            {location.pathname && (
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t("notFound.requestedPath")}{" "}
                  <code className="bg-muted px-2 py-1 rounded text-xs break-all">
                    {location.pathname}
                  </code>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
