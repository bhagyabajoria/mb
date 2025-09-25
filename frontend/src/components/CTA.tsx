import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, ArrowRight, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  const { t } = useLanguage();
  return (
    <section
      id="help"
      className="py-20 bg-gradient-to-br from-[#EBEAEA] via-white to-[#EBEAEA] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1D0A69] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0D6EFD] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#1D0A69]/10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1D0A69]/5 to-[#0D6EFD]/5"></div>

          <CardContent className="p-6 sm:p-10 lg:p-16 text-center relative z-10">
            <div className="max-w-5xl mx-auto space-y-6 sm:space-y-10">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center bg-gradient-to-r from-[#0D6EFD]/10 to-[#198754]/10 text-[#0D6EFD] px-6 py-3 rounded-full text-base font-bold border border-[#0D6EFD]/20 backdrop-blur-sm">
                  <Shield className="w-5 h-5 mr-3" />
                  🏆 {t("cta.trustedByMillions")}
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#1D0A69] via-[#0D6EFD] to-[#198754] bg-clip-text text-transparent leading-tight">
                  {t("cta.title")}
                </h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-2 sm:px-0">
                  {t("cta.subtitle")}
                </p>
              </div>{" "}
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8">
                {[
                  {
                    icon: Users,
                    count: "5M+",
                    label: t("cta.stats.activeUsers"),
                    color: "#0D6EFD",
                  },
                  {
                    icon: Shield,
                    count: "50M+",
                    label: t("cta.stats.documentsSecured"),
                    color: "#198754",
                  },
                  {
                    icon: Clock,
                    count: "99.9%",
                    label: t("cta.stats.uptimeGuarantee"),
                    color: "#1D0A69",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-110 transition-transform duration-300"
                  >
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <div
                        className="p-3 rounded-full"
                        style={{ backgroundColor: `${stat.color}20` }}
                      >
                        <stat.icon
                          className="w-6 h-6 group-hover:scale-125 transition-transform duration-300"
                          style={{ color: stat.color }}
                        />
                      </div>
                      <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1D0A69]">
                        {stat.count}
                      </span>
                    </div>
                    <p className="text-base lg:text-lg text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 py-8">
                {[
                  t("cta.benefits.freePersonalUse"),
                  t("cta.benefits.unlimitedStorage"),
                  t("cta.benefits.access24x7"),
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-3 text-base lg:text-lg group hover:bg-white/50 p-4 rounded-xl transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-[#198754] group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-[#1D0A69] font-medium group-hover:text-[#0D6EFD] transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <Link to="/login">
                  <Button
                    size="lg"
                    className="font-bold text-lg lg:text-xl px-10 py-6 bg-gradient-to-r from-[#1D0A69] to-[#0D6EFD] hover:from-[#0D6EFD] hover:to-[#198754] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
                  >
                    🚀 {t("cta.buttons.getStartedFree")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-bold text-lg lg:text-xl px-10 py-6 border-2 border-[#0D6EFD] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  📞 {t("cta.buttons.contactSupport")}
                </Button>
              </div>
              {/* Government Badge */}
              <div className="pt-8 border-t border-gray-200">
                <div className="inline-flex items-center bg-gradient-to-r from-[#1D0A69]/10 to-[#0D6EFD]/10 px-6 py-3 rounded-full">
                  <p className="text-sm lg:text-base text-gray-600 font-medium">
                    🇮🇳 {t("cta.governmentBadge.initiative")} |
                    <span className="text-[#1D0A69] font-bold ml-1">
                      {t("cta.governmentBadge.features")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
