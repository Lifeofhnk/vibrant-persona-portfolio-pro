
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-navy mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto">
            Feel free to reach out if you would like to connect or discuss opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-none shadow-none">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-portfolio-navy mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Mail className="h-6 w-6 text-portfolio-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-portfolio-navy">Email</h4>
                      <a href="mailto:haadhin@gmail.com" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                        haadhin@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Phone className="h-6 w-6 text-portfolio-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-portfolio-navy">Phone</h4>
                      <a href="tel:+971123456789" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                        +971 12 345 6789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <MapPin className="h-6 w-6 text-portfolio-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-portfolio-navy">Location</h4>
                      <p className="text-portfolio-gray">
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Linkedin className="h-6 w-6 text-portfolio-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-portfolio-navy">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/haadhinoushadk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
                      >
                        linkedin.com/in/haadhinoushadk
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={5} 
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-portfolio-blue hover:bg-portfolio-navy text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
