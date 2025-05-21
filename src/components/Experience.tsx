
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "SolSo",
      period: "February 2024 - Present",
      location: "Dubai, United Arab Emirates",
      description: [
        "Developing a comprehensive SaaS solution for Hospitality & Fitness industries",
        "Working with React, Node.js, and various cloud technologies",
        "Participating in the complete software development lifecycle"
      ]
    },
    {
      title: "Student Kitchen Porter",
      company: "Jumeirah Restaurant Group",
      period: "September 2021 - July 2022",
      location: "Dubai, United Arab Emirates",
      description: [
        "Worked in various outlets of Jumeirah Restaurant Group",
        "Balanced academic responsibilities with professional obligations",
        "Developed time management and teamwork skills in a fast-paced environment"
      ]
    },
    {
      title: "Voluntary Experience",
      company: "Hospitality and Events",
      period: "Various periods",
      location: "Dubai, United Arab Emirates",
      description: [
        "Participate in community service and volunteer events",
        "Support various initiatives in the hospitality sector",
        "Contribute to event management and planning"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-navy mb-2">Experience</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto">
            Professional experiences that have shaped my career journey
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-portfolio-blue shadow hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-portfolio-navy">{exp.title}</CardTitle>
                <div className="text-portfolio-blue font-medium">{exp.company}</div>
                <div className="text-portfolio-gray text-sm">{exp.period} | {exp.location}</div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-portfolio-gray">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
