import { FolderOpen, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-card border-t-2 border-govt-blue">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex items-center">
                <img
                  src="/main.png"
                  alt="MediBridge Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain rounded"
                />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-govt-blue">
                  MediBridge
                </div>
                <div className="text-xs text-muted-foreground">
                  {t("footer.tagline")}
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="space-y-1 sm:space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-3 h-3" />
                <span className="text-xs">support@MediBridge.gov.in</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-3 h-3" />
                <span className="text-xs">1800-123-HEALTH (43258)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t("footer.services.title")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.services.documentUpload")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.services.documentVerification")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.services.secureSharing")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.services.mobileAccess")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.services.apiIntegration")}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t("footer.support.title")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.support.helpCenter")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.support.userGuide")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.support.videoTutorials")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.support.contactUs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Government Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t("footer.government.title")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors flex items-center"
                >
                  {t("footer.government.digitalIndia")}{" "}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors flex items-center"
                >
                  {t("footer.government.ministryOfHealth")}{" "}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.government.privacyPolicy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.government.termsOfService")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("footer.government.rti")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                {t("footer.copyright")}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {t("footer.developedBy")}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-xs bg-govt-blue/10 text-govt-blue px-2 py-1 rounded border border-govt-blue/20">
                ISO 27001
              </span>
              <span className="text-xs bg-govt-green/10 text-govt-green px-2 py-1 rounded border border-govt-green/20">
                SSL Secured
              </span>
              <span className="text-xs bg-govt-orange/10 text-govt-orange px-2 py-1 rounded border border-govt-orange/20">
                CERT-In Empanelled
              </span>
            </div>
          </div>

          <div className="text-center mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">
                {t("footer.browserSupport.label")}
              </span>{" "}
              {t("footer.browserSupport.browsers")} |
              <span className="font-medium">
                {" "}
                {t("footer.screenResolution.label")}
              </span>{" "}
              {t("footer.screenResolution.value")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
