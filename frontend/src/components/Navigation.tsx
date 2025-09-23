import { Button } from "@/components/ui/button";
import { FolderOpen, Shield, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="w-full bg-card border-b-2 border-govt-blue sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Government Style Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex items-center">
                <img
                  src="/main.png"
                  alt="MediBridge Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain rounded"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg sm:text-xl font-bold text-govt-blue">
                  MediBridge
                </div>
                <div className="text-xs text-muted-foreground">
                  Digital Health Documents
                </div>
              </div>
              <div className="block sm:hidden">
                <div className="text-base font-bold text-govt-blue">
                  MediBridge
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#services"
              onClick={handleNavClick}
              className="text-sm font-medium text-muted-foreground hover:text-govt-blue transition-colors"
            >
              Services
            </a>
            <a
              href="#documents"
              onClick={handleNavClick}
              className="text-sm font-medium text-muted-foreground hover:text-govt-blue transition-colors"
            >
              Documents
            </a>
            <a
              href="#verify"
              onClick={handleNavClick}
              className="text-sm font-medium text-muted-foreground hover:text-govt-blue transition-colors"
            >
              Verify
            </a>
            <a
              href="#help"
              onClick={handleNavClick}
              className="text-sm font-medium text-muted-foreground hover:text-govt-blue transition-colors"
            >
              Help
            </a>
          </div>

          {/* Login Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link to="/login" className="hidden sm:block">
              <Button
                variant="govt-outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/login" className="block sm:hidden">
              <Button variant="govt-outline" size="sm" className="text-xs px-2">
                Login
              </Button>
            </Link>
            <Button
              variant="govt"
              size="sm"
              className="text-xs sm:text-sm hidden sm:block"
            >
              Register
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 text-govt-blue hover:bg-govt-blue/10 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm border border-govt-blue/20"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-200" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-200" />
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
            <div className="relative z-50 bg-gradient-to-br from-card via-card to-secondary/20 border-t border-govt-blue/20 shadow-2xl">
              <div className="container mx-auto px-6 py-6">
                {/* Navigation Links */}
                <div className="space-y-1 mb-6">
                  <a
                    href="#services"
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 text-base font-medium text-foreground hover:text-govt-blue hover:bg-govt-blue/5 transition-all duration-200 py-4 px-4 rounded-lg border border-transparent hover:border-govt-blue/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-govt-blue opacity-60"></div>
                    <span>Our Services</span>
                  </a>
                  <a
                    href="#documents"
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 text-base font-medium text-foreground hover:text-govt-blue hover:bg-govt-blue/5 transition-all duration-200 py-4 px-4 rounded-lg border border-transparent hover:border-govt-blue/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-govt-green opacity-60"></div>
                    <span>Document Types</span>
                  </a>
                  <a
                    href="#verify"
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 text-base font-medium text-foreground hover:text-govt-blue hover:bg-govt-blue/5 transition-all duration-200 py-4 px-4 rounded-lg border border-transparent hover:border-govt-blue/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-govt-orange opacity-60"></div>
                    <span>Security & Verify</span>
                  </a>
                  <a
                    href="#help"
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 text-base font-medium text-foreground hover:text-govt-blue hover:bg-govt-blue/5 transition-all duration-200 py-4 px-4 rounded-lg border border-transparent hover:border-govt-blue/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-govt-blue opacity-60"></div>
                    <span>Get Help</span>
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
                      Get Started
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
