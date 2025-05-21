
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "Financial Planning", "Business Development", "Operations Management", 
    "MS Excel", "Power BI", "Tableau", "Data Analysis", 
    "Market Research", "Strategic Planning", "JASP", "Python"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-navy mb-2">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto">
            A finance and operations professional with experience in business development and strategic planning in the travel industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-navy mb-4">Education</h3>
            <div className="mb-8">
              <h4 className="text-xl font-medium text-portfolio-blue">Lovely Professional University</h4>
              <p className="text-portfolio-gray">Master of Business Administration</p>
              <p className="text-sm text-portfolio-gray">CGPA: 8.33 | Since August 2024</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium text-portfolio-blue">Delhi University</h4>
              <p className="text-portfolio-gray">Bachelor of Commerce</p>
              <p className="text-sm text-portfolio-gray">72.42% | 2020 - 2023</p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-medium text-portfolio-blue">Farook English Medium School</h4>
              <p className="text-portfolio-gray">Commerce</p>
              <p className="text-sm text-portfolio-gray">2018 - 2020</p>
            </div>

            <h3 className="text-2xl font-semibold text-portfolio-navy mb-4 mt-10">Certifications</h3>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-portfolio-blue">National Financial Literacy Quiz 2025</h4>
              <p className="text-sm text-portfolio-gray">National Institute of Securities Markets (NISM) | February 2025</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-portfolio-blue">Data Visualization Using Python</h4>
              <p className="text-sm text-portfolio-gray">IBM | December 2024</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-portfolio-blue">Microsoft Excel with AI: From Beginners to Professionals</h4>
              <p className="text-sm text-portfolio-gray">LPU Centre for Professional Enhancement | December 2024</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-portfolio-blue">PowerBI Workshop</h4>
              <p className="text-sm text-portfolio-gray">Office Master | December 2024</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-navy mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="border border-gray-200 hover:border-portfolio-accent transition-colors">
                  <CardContent className="p-4 text-center">
                    <p className="font-medium">{skill}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
