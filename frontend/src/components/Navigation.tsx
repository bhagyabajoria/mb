import { Button } from "@/components/ui/button";
import { FolderOpen, Shield, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Smooth scroll handler with mobile offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        setIsMobileMenuOpen(false); // Close mobile menu first

        // Add delay to allow menu to close, then scroll with offset
        setTimeout(() => {
          const nav = document.querySelector("nav");
          const navHeight = nav ? nav.offsetHeight : 70; // Dynamic nav height
          const additionalOffset = 20; // Extra space for better visual separation
          const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navHeight -
            additionalOffset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }, 150); // Small delay for menu close animation
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-card/95 backdrop-blur-lg border-b-2 border-govt-blue/20 sticky top-0 z-50 shadow-lg shadow-govt-blue/5 animate-navbar-slide">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Government Style Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/main.png"
                  alt="MediBridge Logo"
                  className="h-8 w-8 sm:h-12 sm:w-12 object-contain rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg sm:text-2xl font-bold text-govt-blue group-hover:text-govt-blue/90 transition-colors duration-300">
                  MediBridge
                </div>
                <div className="text-xs text-muted-foreground group-hover:text-govt-blue/60 transition-colors duration-300">
                  Digital Health Documents
                </div>
              </div>
              <div className="block sm:hidden">
                <div className="text-base font-bold text-govt-blue group-hover:text-govt-blue/90 transition-colors duration-300">
                  MediBridge
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#services"
              onClick={handleNavClick}
              className="relative text-sm font-medium text-muted-foreground hover:text-govt-blue transition-all duration-300 group py-2"
            >
              {t("nav.services")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-govt-blue to-govt-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#documents"
              onClick={handleNavClick}
              className="relative text-sm font-medium text-muted-foreground hover:text-govt-blue transition-all duration-300 group py-2"
            >
              {t("nav.documents")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-govt-blue to-govt-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#verify"
              onClick={handleNavClick}
              className="relative text-sm font-medium text-muted-foreground hover:text-govt-blue transition-all duration-300 group py-2"
            >
              {t("nav.verify")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-govt-blue to-govt-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#help"
              onClick={handleNavClick}
              className="relative text-sm font-medium text-muted-foreground hover:text-govt-blue transition-all duration-300 group py-2"
            >
              {t("nav.help")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-govt-blue to-govt-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Login Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher variant="compact" />

            <Link to="/login" className="hidden sm:block">
              <Button
                variant="govt-outline"
                size="sm"
                className="text-xs sm:text-sm border-2 hover:bg-govt-blue/5 hover:border-govt-blue/70 transition-all duration-300 hover:shadow-md hover:shadow-govt-blue/20 group"
              >
                <span className="group-hover:scale-105 transition-transform duration-300">
                  {t("nav.signIn")}
                </span>
              </Button>
            </Link>
            <Link to="/login" className="block sm:hidden">
              <Button
                variant="govt-outline"
                size="sm"
                className="text-xs px-2 border-2 hover:bg-govt-blue/5 transition-all duration-300"
              >
                {t("nav.signIn")}
              </Button>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 text-govt-blue hover:bg-govt-blue/10 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg border border-govt-blue/30 hover:border-govt-blue/50 bg-gradient-to-br from-card to-secondary/10"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div className="absolute left-0 right-0 top-full z-50 bg-gradient-to-br from-card via-card to-secondary/20 border-t border-govt-blue/20 shadow-2xl">
              <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
                {/* Navigation Links */}
                <div className="space-y-1 mb-6">
                  <a
                    href="#services"
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 text-base font-medium text-foreground hover:text-govt-blue hover:bg-govt-blue/5 transition-all duration-200 py-4 px-4 rounded-lg border border-transparent hover:border-govt-blue/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-govt-blue opacity-60"></div>
                    <span>{t("nav.services")}</span>
                  </a>
                  <a
                    href="#documents"
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 text-base font-medium text-foreground hover:text-govt-blue hover:bg-govt-blue/5 transition-all duration-200 py-4 px-4 rounded-lg border border-transparent hover:border-govt-blue/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-govt-green opacity-60"></div>
                    <span>{t("nav.documents")}</span>
                  </a>
                  <a
                    href="#verify"
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 text-base font-medium text-foreground hover:text-govt-blue hover:bg-govt-blue/5 transition-all duration-200 py-4 px-4 rounded-lg border border-transparent hover:border-govt-blue/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-govt-orange opacity-60"></div>
                    <span>{t("nav.verify")}</span>
                  </a>
                  <a
                    href="#help"
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 text-base font-medium text-foreground hover:text-govt-blue hover:bg-govt-blue/5 transition-all duration-200 py-4 px-4 rounded-lg border border-transparent hover:border-govt-blue/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-govt-blue opacity-60"></div>
                    <span>{t("nav.help")}</span>
                  </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-govt-blue/30 to-transparent mb-6"></div>

                {/* Action Button */}
                <div className="space-y-3">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="govt"
                      size="lg"
                      className="w-full py-4 text-base font-semibold bg-gradient-to-r from-govt-blue to-govt-blue/90 hover:from-govt-blue/90 hover:to-govt-blue shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      {t("nav.register")}
                    </Button>
                  </Link>

                  {/* Quick Info */}
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground/80">
                      Secure • Government Approved • Free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
