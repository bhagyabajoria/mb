import { Button } from "@/components/ui/button";
import { Shield, FileText, Folder, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-gradient-to-br from-[#EBEAEA] via-white to-[#EBEAEA] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1D0A69] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0D6EFD] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#198754] rounded-full blur-3xl"></div>
      </div>{" "}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#0D6EFD] px-4 sm:px-6 py-3 rounded-full border border-[#0D6EFD]/20 text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                <span className="font-semibold">{t("home.title")}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1D0A69] leading-tight animate-fade-in">
                <span className="bg-gradient-to-r from-[#1D0A69] to-[#0D6EFD] bg-clip-text text-transparent">
                  {t("home.subtitle")}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl animate-fade-in-up">
                {t("home.description")}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                t("home.features.secureStorage"),
                t("home.features.docVerification"),
                t("home.features.instantShare"),
                t("home.features.mobileAccess"),
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-4 group hover:bg-white/50 p-2 sm:p-3 rounded-lg transition-all duration-300"
                >
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-[#198754] to-[#198754]/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Check className="w-2 h-2 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-xs sm:text-base text-[#1D0A69] font-medium group-hover:text-[#0D6EFD] transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-1 pb-2">
              <Link to="/login" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="font-semibold text-base sm:text-lg w-full px-8 py-4 bg-gradient-to-r from-[#1D0A69] to-[#0D6EFD] hover:from-[#0D6EFD] hover:to-[#1D0A69] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  🚀 {t("home.getStarted")}
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-8 pt-8 border-t border-white/30">
              {[
                {
                  icon: Shield,
                  text: t("home.security.sslSecured"),
                  color: "#198754",
                },
                {
                  icon: FileText,
                  text: t("home.security.iso27001"),
                  color: "#0D6EFD",
                },
                {
                  icon: Folder,
                  text: t("home.security.hipaaCompliant"),
                  color: "#1D0A69",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 sm:space-x-2 group hover:bg-white/30 px-2 sm:px-3 py-1 sm:py-2 rounded-lg transition-all duration-300"
                >
                  <item.icon
                    className="w-3 h-3 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: item.color }}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 group-hover:text-[#1D0A69] font-medium transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Display */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1D0A69]/20 to-[#0D6EFD]/20 rounded-full blur-3xl transform scale-110"></div>
              <img
                src="/main.png"
                alt="MediBridge Logo"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl 
                           transition-all duration-500 hover:scale-105 hover:rotate-2 relative z-10
                           animate-float"
              />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#198754] to-[#0D6EFD] rounded-full animate-ping"></div>
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-[#1D0A69] rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
