import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
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

      <div className="container mx-auto px-6 relative z-10">
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#1D0A69]/10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1D0A69]/5 to-[#0D6EFD]/5"></div>

          <CardContent className="p-10 lg:p-16 text-center relative z-10">
            <div className="max-w-5xl mx-auto space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-gradient-to-r from-[#0D6EFD]/10 to-[#198754]/10 text-[#0D6EFD] px-6 py-3 rounded-full text-base font-bold border border-[#0D6EFD]/20 backdrop-blur-sm">
                  <Shield className="w-5 h-5 mr-3" />
                  🏆 Trusted by Millions
                </div>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#1D0A69] via-[#0D6EFD] to-[#198754] bg-clip-text text-transparent leading-tight">
                  Start Using Your Digital Health Vault Today
                </h2>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Join millions of Indians who have digitized their health
                  documents. Get secure access to your medical records anytime,
                  anywhere.
                </p>
              </div>{" "}
              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 py-8">
                {[
                  {
                    icon: Users,
                    count: "5M+",
                    label: "Active Users",
                    color: "#0D6EFD",
                  },
                  {
                    icon: Shield,
                    count: "50M+",
                    label: "Documents Secured",
                    color: "#198754",
                  },
                  {
                    icon: Clock,
                    count: "99.9%",
                    label: "Uptime Guarantee",
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
                      <span className="text-3xl lg:text-4xl font-bold text-[#1D0A69]">
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
                  "Free for Personal Use",
                  "Unlimited Storage for Docs",
                  "24/7 Access",
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
                    🚀 Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-bold text-lg lg:text-xl px-10 py-6 border-2 border-[#0D6EFD] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  📞 Contact Support
                </Button>
              </div>
              {/* Government Badge */}
              <div className="pt-8 border-t border-gray-200">
                <div className="inline-flex items-center bg-gradient-to-r from-[#1D0A69]/10 to-[#0D6EFD]/10 px-6 py-3 rounded-full">
                  <p className="text-sm lg:text-base text-gray-600 font-medium">
                    🇮🇳 A Digital India Initiative | Government of India |
                    <span className="text-[#1D0A69] font-bold ml-1">
                      Secure • Reliable • Accessible
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
