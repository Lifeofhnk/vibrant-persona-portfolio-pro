
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Unlocking Growth: Navigating Export Opportunities",
      description: "Explored international trade dynamics, export procedures, and market entry strategies. Analyzed India's spice exports (HS Code 0910), focusing on key markets, trade incentives, and the role of certifications and subsidies in enhancing global competitiveness.",
      technologies: ["International Business", "Market Research", "Export Analysis"],
      time: "February 2025",
      institution: "Lovely Professional University",
      image: "placeholder.svg"
    },
    {
      title: "Analysis and Competitor Benchmarking: Adani Energy Solutions",
      description: "Analyzed Adani Energy's capital structure, benchmarking against Tata Power to identify improvements. Provided insights on profitability, liquidity, and solvency for better market positioning.",
      technologies: ["Financial Analysis", "Benchmarking", "Strategic Planning"],
      time: "December 2024",
      institution: "Lovely Professional University",
      image: "placeholder.svg"
    },
    {
      title: "Volkswagen Operations Study Analysis",
      description: "Examined supply chain logistics and strategies to maintain sustainability and international growth. Conducted data analysis using Tableau, JASP, Power BI, and Excel. Provided actionable insights to optimize Volkswagen's global supply chain operations through data visualization and reporting.",
      technologies: ["Tableau", "JASP", "Power BI", "Excel"],
      time: "September 2024",
      institution: "Lovely Professional University",
      image: "placeholder.svg"
    },
    {
      title: "Professional Development and Networking: Career Wisdom",
      description: "Conducted a project focused on career development and wisdom. Interacted with 30 faculty members to gather career advice and insights. Compiled the findings into actionable career strategies for personal growth and professional success.",
      technologies: ["Networking", "Career Development", "Research"],
      time: "September 2024",
      institution: "Lovely Professional University",
      image: "placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-navy mb-2">Projects</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto">
            Academic and professional projects showcasing my analytical and business skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-portfolio-navy">{project.title}</CardTitle>
                <div className="text-sm text-portfolio-gray">{project.time} | {project.institution}</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} className="bg-portfolio-blue text-white hover:bg-portfolio-navy">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-portfolio-gray">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
