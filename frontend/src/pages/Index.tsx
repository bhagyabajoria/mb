import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="bg-[#EBEAEA]">
        <Hero />
        <Features />
        <Security />
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
