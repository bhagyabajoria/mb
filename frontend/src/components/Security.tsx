import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Lock, Eye, Server, Award, CheckCircle } from "lucide-react";

const Security = () => {
  const { t } = useLanguage();

  const securityFeatures = [
    {
      icon: Lock,
      title: t("security.encryption.title"),
      description: t("security.encryption.description"),
    },
    {
      icon: Shield,
      title: t("security.digitalSignatures.title"),
      description: t("security.digitalSignatures.description"),
    },
    {
      icon: Eye,
      title: t("security.accessControl.title"),
      description: t("security.accessControl.description"),
    },
    {
      icon: Server,
      title: t("security.infrastructure.title"),
      description: t("security.infrastructure.description"),
    },
    {
      icon: Award,
      title: t("security.compliance.title"),
      description: t("security.compliance.description"),
    },
    {
      icon: CheckCircle,
      title: t("security.auditTrail.title"),
      description: t("security.auditTrail.description"),
    },
  ];

  return (
    <section id="verify" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            {t("security.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {t("security.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Security Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border border-border">
                <CardHeader className="pb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-secondary flex items-center justify-center mb-2">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-govt-blue" />
                  </div>
                  <CardTitle className="text-sm sm:text-base text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Verification Process */}
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <Card className="bg-secondary/50 border-2 border-govt-blue/20">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-govt-blue text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
                      1
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">
                        {t("security.verification.step1.title")}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {t("security.verification.step1.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-govt-blue text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
                      2
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">
                        {t("security.verification.step2.title")}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {t("security.verification.step2.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-govt-green text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
                      3
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">
                        {t("security.verification.step3.title")}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {t("security.verification.step3.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-govt-green text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
                      4
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">
                        {t("security.verification.step4.title")}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {t("security.verification.step4.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-govt-blue/5 p-4 sm:p-6 rounded border border-govt-blue/20">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                {t("security.whyVerificationMatters.title")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                {t("security.whyVerificationMatters.description")}
              </p>
              <Button
                variant="govt-outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                {t("security.learnMore")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
