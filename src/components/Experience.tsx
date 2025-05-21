
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Trainee",
      company: "Quality Council of India | Gunvatta Gurukul",
      period: "March 2025 - May 2025",
      location: "India",
      description: [
        "Contributed to policy research and analysis of quality standards and frameworks",
        "Participated in initiatives to promote national interests through adherence to quality standards",
        "Built a professional network by collaborating with industry experts, policymakers, and peers",
        "Gained skills in identifying and mitigating project risks to ensure quality alignment"
      ]
    },
    {
      title: "Finance and Operations Manager",
      company: "Flylux Holiday Experts",
      period: "November 2023 - June 2024",
      location: "India",
      description: [
        "Developed and launched international travel packages and digital solutions, driving revenue growth and enhancing customer satisfaction in a fully remote environment",
        "Managed financial planning and budgeting for travel packages, ensuring cost-efficiency while optimizing profit margins",
        "Managed financial operations and cash flow, reducing costs by 10% through strategic partnerships and vendor negotiations",
        "Increased bookings by 40% through targeted marketing strategies and enhanced customer engagement, driving revenue growth"
      ]
    },
    {
      title: "Business Development Executive",
      company: "Roversgo Travel Company",
      period: "March 2022 - November 2023",
      location: "India",
      description: [
        "Directed the company's entry into international markets, introducing premium travel services and diversifying offerings",
        "Developed strategic partnerships and marketing campaigns, driving a 40% increase in bookings within the first year",
        "Streamlined logistics and operations, ensuring exceptional client experiences and service consistency",
        "Achieved a growth rate of 30% year-on-year by leveraging innovative customer service and marketing strategies"
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
