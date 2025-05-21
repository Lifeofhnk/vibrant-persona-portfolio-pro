
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "JavaScript", "Python", "React", "Next.js", 
    "Machine Learning", "Data Analysis", "Node.js", "SQL", 
    "Git", "REST APIs", "MongoDB", "Flutter"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-navy mb-2">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto">
            A Software Engineering student with passion for machine learning and innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-navy mb-4">Education</h3>
            <div className="mb-8">
              <h4 className="text-xl font-medium text-portfolio-blue">University of Wollongong Dubai</h4>
              <p className="text-portfolio-gray">Bachelor of Computer Science (Software Engineering)</p>
              <p className="text-sm text-portfolio-gray">2023 - Present</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium text-portfolio-blue">The Emirates Academy of Hospitality Management</h4>
              <p className="text-portfolio-gray">Bachelor of Business Administration in International Hospitality Management</p>
              <p className="text-sm text-portfolio-gray">2019 - 2023</p>
            </div>

            <h3 className="text-2xl font-semibold text-portfolio-navy mb-4 mt-10">Certifications</h3>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-portfolio-blue">Machine Learning Specialization</h4>
              <p className="text-sm text-portfolio-gray">Coursera (Stanford University & DeepLearning.AI)</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-portfolio-blue">Meta Back-End Developer Specialization</h4>
              <p className="text-sm text-portfolio-gray">Coursera (Meta)</p>
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
