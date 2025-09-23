import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FolderOpen,
  Shield,
  FileText,
  Upload,
  Download,
  Share2,
  Smartphone,
  Search,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FolderOpen,
      title: "Organize & Store",
      description:
        "Automatically organize documents by type, date, and medical category for easy retrieval.",
      color: "text-govt-green",
    },
    {
      icon: Shield,
      title: "Verify Authenticity",
      description:
        "Advanced verification using NAMASTE and ICD-11 (TM2) technology ensures your documents are genuine and tamper-proof.",
      color: "text-govt-blue",
    },
    {
      icon: Search,
      title: "Quick Search",
      description:
        "Find any document instantly using smart search with filters by date, type, or medical condition.",
      color: "text-govt-green",
    },
    {
      icon: Download,
      title: "Quick Access",
      description:
        "Access and download your verified documents 24/7 from anywhere with internet connectivity.",
      color: "text-govt-blue",
    },
    {
      icon: Share2,
      title: "Secure Sharing",
      description:
        "Share verified copies with doctors, hospitals, or insurance companies with just a few clicks.",
      color: "text-govt-green",
    },
    {
      icon: FileText,
      title: "ICD-11 (TM2) Classification",
      description:
        "Documents are automatically classified using WHO's latest International Classification of Diseases.",
      color: "text-govt-blue",
    },
  ];

  return (
    <>
      {/* Services Section */}
      <section
        id="services"
        className="py-16 sm:py-20 bg-gradient-to-br from-white via-[#EBEAEA]/30 to-white relative overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#0D6EFD] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#198754] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#1D0A69]/10 to-[#0D6EFD]/10 text-[#1D0A69] px-6 py-3 rounded-full text-sm font-semibold border border-[#1D0A69]/20 backdrop-blur-sm">
              ⚡ Powerful Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#1D0A69] to-[#0D6EFD] bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A comprehensive digital platform for managing your health
              documents with government-grade security and international
              standards.
            </p>
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:border-[#0D6EFD]/30 hover:shadow-2xl transition-all duration-500 h-full group hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-white to-[#EBEAEA]/50 mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon
                      className={`w-7 h-7 sm:w-8 sm:h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-[#1D0A69] group-hover:text-[#0D6EFD] transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section
        id="documents"
        className="py-16 sm:py-20 bg-gradient-to-br from-[#EBEAEA]/50 via-white to-[#EBEAEA]/30"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-[#198754]/10 to-[#0D6EFD]/10 text-[#198754] px-6 py-3 rounded-full text-sm font-semibold border border-[#198754]/20 backdrop-blur-sm mb-6">
              📄 Document Support
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1D0A69] to-[#198754] bg-clip-text text-transparent mb-4">
              Supported Document Types
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Store and manage all types of health-related documents with ease
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Lab Reports & Test Results",
              "Vaccination Certificates",
              "Prescriptions & Medicine Lists",
              "Medical Imaging (X-Ray, MRI, CT Scan)",
              "Discharge Summaries",
              "Insurance Documents",
              "Medical Certificates",
              "Health Check-up Reports",
            ].map((docType, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white group cursor-pointer"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-[#0D6EFD] to-[#198754] flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-sm sm:text-base text-[#1D0A69] leading-tight font-medium group-hover:text-[#0D6EFD] transition-colors duration-300">
                  {docType}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
