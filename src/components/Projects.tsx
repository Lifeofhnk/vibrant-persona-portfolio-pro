
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hotel Management System",
      description: "Developed a comprehensive hotel management system with booking capabilities, room management, and customer tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "#",
      liveLink: "#",
      image: "placeholder.svg"
    },
    {
      title: "Machine Learning Model for Customer Segmentation",
      description: "Created a machine learning model to segment hotel customers based on their booking patterns and preferences.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      githubLink: "#",
      liveLink: "#",
      image: "placeholder.svg"
    },
    {
      title: "Restaurant Inventory Tracker",
      description: "Built an application to track and manage restaurant inventory with real-time updates and alerts for low stock.",
      technologies: ["JavaScript", "React", "Firebase", "Material UI"],
      githubLink: "#",
      liveLink: "#",
      image: "placeholder.svg"
    },
    {
      title: "Hospitality Data Analysis Dashboard",
      description: "Designed and implemented a data visualization dashboard for hospitality metrics and KPIs.",
      technologies: ["Python", "Dash", "Plotly", "SQL"],
      githubLink: "#",
      liveLink: "#",
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
            Showcasing my technical skills through various projects
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
              <CardFooter className="flex justify-between gap-4 pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button 
                  className="flex-1 bg-portfolio-blue hover:bg-portfolio-navy text-white"
                  asChild
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
