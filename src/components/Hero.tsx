
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-navy mb-4 animate-fade-in">
            <span className="block">Haadhi Noushad K</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-gray mb-6 animate-fade-in-delayed">
            MBA Graduate | Finance and Operations Professional
          </h2>
          <p className="text-lg text-portfolio-gray mb-8 animate-fade-in-delayed">
            Experienced in business development, financial planning, and operations management with a proven track record of driving growth and optimizing processes in the travel industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delayed">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-portfolio-blue hover:bg-portfolio-navy text-white"
            >
              Contact Me
            </Button>
            <Button 
              onClick={() => scrollToSection("about")}
              variant="outline" 
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full border border-portfolio-gray text-portfolio-gray hover:border-portfolio-blue hover:text-portfolio-blue transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDownIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
