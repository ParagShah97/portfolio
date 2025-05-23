
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, SquareCode, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center section-padding pt-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white">
              Parag Shah
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-700 dark:text-gray-300">
              Software Engineer
            </h2>
          </div>
          
          <p className="text-lg text-navy-600 dark:text-gray-400 max-w-lg">
            A passionate Software Engineer with 3+ years of experience delivering scalable, AI-powered solutions across fintech, healthcare, and customer support domains. Pursued my Master's in Computer Science at the University at Buffalo, I specialize in full-stack development, cloud-native systems, and applied AI. 
            <br/>
            <br/>
            I've built fintech platforms from the ground up, deployed 15+ production releases, and recently developed an AI-driven healthcare solution for underserved communities. At Best Practical Solutions, I integrated GPT-based models into support workflows, and as Head TA, I led automation efforts that improved academic operations for 500+ students. I thrive on solving real-world problems through clean, impactful engineering.
          </p>

          <div className="flex items-center text-navy-600 dark:text-gray-400">
            <MapPin size={18} className="mr-2 text-primary" />
            <span>Seattle, Washington</span>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="bg-primary hover:bg-primary/90">
              <a href="#projects" className="flex items-center">
                View My Work
              </a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="/portfolio/Parag_Shah_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText size={18} />
                Resume
              </a>
            </Button>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <a href="https://github.com/ParagShah97" title="Visit my GitHub" target="_blank" rel="noopener noreferrer"
              className="text-navy-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/parag-shah97/" title="Visit my LinkedIn" target="_blank" rel="noopener noreferrer"
              className="text-navy-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/Parag_07/" title="Visit my LeetCode" target="_blank" rel="noopener noreferrer"
              className="text-navy-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <SquareCode size={24} />
            </a>
            <a href="mailto:parag.shah97@gmail.com" title="Contact Me"
              className="text-navy-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-300 rounded-lg blur opacity-75"></div>
            <div className="relative bg-white dark:bg-navy-900 rounded-lg overflow-hidden border border-gray-200 dark:border-navy-700 p-6 md:p-8">
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-navy-700 shadow-lg mb-4">
                  <img 
                    src="/portfolio/myImg.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-navy-600 dark:text-gray-400">Full Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
