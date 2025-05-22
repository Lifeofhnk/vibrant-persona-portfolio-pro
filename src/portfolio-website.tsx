import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar, Building } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      setScrolled(window.scrollY > 50);

      // Animate experience cards on scroll
      const experienceCards = document.querySelectorAll('.experience-card');
      experienceCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleCards(prev => new Set([...prev, index]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

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

  const projects = [
    {
      title: "Unlocking Growth: Navigating Export Opportunities",
      description: "Explored international trade dynamics, export procedures, and market entry strategies. Analyzed India's spice exports (HS Code 0910), focusing on key markets, trade incentives, and the role of certifications and subsidies in enhancing global competitiveness.",
      technologies: ["International Business", "Market Research", "Export Analysis"],
      time: "February 2025",
      institution: "Lovely Professional University"
    },
    {
      title: "Analysis and Competitor Benchmarking: Adani Energy Solutions",
      description: "Analyzed Adani Energy's capital structure, benchmarking against Tata Power to identify improvements. Provided insights on profitability, liquidity, and solvency for better market positioning.",
      technologies: ["Financial Analysis", "Benchmarking", "Strategic Planning"],
      time: "December 2024",
      institution: "Lovely Professional University"
    },
    {
      title: "Volkswagen Operations Study Analysis",
      description: "Examined supply chain logistics and strategies to maintain sustainability and international growth. Conducted data analysis using Tableau, JASP, Power BI, and Excel.",
      technologies: ["Tableau", "JASP", "Power BI", "Excel"],
      time: "September 2024",
      institution: "Lovely Professional University"
    },
    {
      title: "Professional Development and Networking: Career Wisdom",
      description: "Conducted a project focused on career development and wisdom. Interacted with 30 faculty members to gather career advice and insights.",
      technologies: ["Networking", "Career Development", "Research"],
      time: "September 2024",
      institution: "Lovely Professional University"
    }
  ];

  const skills = [
    "Financial Planning", "Business Development", "Operations Management", 
    "MS Excel", "Power BI", "Tableau", "Data Analysis", 
    "Market Research", "Strategic Planning", "JASP", "Python"
  ];

  const certifications = [
    {
      title: "International Business",
      issuer: "Indian Institute of Technology, Roorkee",
      date: "April 2025",
      grade: "Elite"
    },
    {
      title: "National Financial Literacy Quiz 2025",
      issuer: "National Institute of Securities Markets (NISM)",
      date: "February 2025"
    },
    {
      title: "Data Visualization Using Python",
      issuer: "IBM",
      date: "December 2024"
    },
    {
      title: "Microsoft Excel with AI: From Beginners to Professionals",
      issuer: "LPU Centre for Professional Enhancement",
      date: "December 2024"
    },
    {
      title: "PowerBI Workshop",
      issuer: "Office Master",
      date: "December 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
            style={{ color: scrolled ? '#1a1a1a' : '#ffffff' }}
          >
            Haadhi Noushad K
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 hover:opacity-80 ${
                  activeSection === item.id 
                    ? 'font-semibold border-b-2 border-blue-500' 
                    : 'font-medium'
                }`}
                style={{ color: scrolled ? '#4a5568' : '#ffffff' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
                <div className="w-60 h-60 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-800">
                    <img src="/public/lovable-uploads/6eb1b3d9-4749-451a-9beb-8ed30653a34d.png" alt="Profile" className="rounded-full w-full h-full object-contain" />
                  </div>
                </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Haadhi Noushad K
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up-delay">
              MBA Graduate | Finance and Operations Professional
            </h2>
            
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Experienced in business development, financial planning, and operations management with a proven track record of driving growth and optimizing processes in the travel industry.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-delay-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-3 rounded-full border-2 border-white/30 text-white hover:border-white/60 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A finance and operations professional with experience in business development and strategic planning in the travel industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education & Certifications */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900">Master of Business Administration</h4>
                    <p className="text-blue-600 font-medium">Lovely Professional University</p>
                    <p className="text-gray-600">CGPA: 8.33 | Since August 2024</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900">Bachelor of Commerce</h4>
                    <p className="text-blue-600 font-medium">Delhi University</p>
                    <p className="text-gray-600">72.42% | 2020 - 2023</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                      <p className="text-blue-600 text-sm">{cert.issuer}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-gray-600 text-sm">{cert.date}</p>
                        {cert.grade && <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">{cert.grade}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                    <p className="font-medium text-gray-900">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional experiences that have shaped my career journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`experience-card bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform transition-all duration-700 ${
                  visibleCards.has(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 leading-relaxed flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Academic and professional projects showcasing my analytical and business skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <div className="text-sm text-gray-600 mb-4">{project.time} | {project.institution}</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Feel free to reach out if you would like to connect or discuss opportunities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:haadhinoushadk@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  haadhinoushadk@gmail.com
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+919387702020" className="text-blue-600 hover:text-blue-800 transition-colors">
                  +91 938 770 2020
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Phagwara, Punjab, India</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/haadhinoushadk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold">Haadhi Noushad K</h2>
              <p className="text-gray-400 mt-2">MBA Graduate | Finance and Operations Professional</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/haadhinoushadk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:haadhinoushadk@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Haadhi Noushad K. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;