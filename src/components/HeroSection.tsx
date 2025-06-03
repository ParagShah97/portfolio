
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
            A passionate Software Engineer with 3+ years of experience delivering scalable, AI-powered full-stack solutions across fintech, healthcare, and customer support domains. Pursued my Master's in Computer Science and Engineering in AI at the University at Buffalo.
            <br/>
            <br/>
            I’ve led end-to-end development of fintech platforms, delivering 15+ production releases that improved client workflows and risk analysis. At Best Practical Solutions, I integrated GPT-based models into customer support systems, accelerating ticket triage and response time. In parallel, I developed an AI-powered healthcare solution to help underserved communities access insurance and resources. As Head TA, I spearheaded automation initiatives that streamlined academic operations for over 500 students. I'm driven by solving real-world problems through clean, efficient, and impactful engineering.
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
  <div className="relative scale-110 md:scale-125 transition-transform duration-300">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-300 rounded-xl blur-lg opacity-80"></div>
    <div className="relative bg-white dark:bg-navy-900 rounded-xl overflow-hidden border border-gray-300 dark:border-navy-700 p-8 md:p-10 shadow-xl">
      <div className="text-center">
        <div className="w-64 h-64 md:w-70 md:h-70 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-navy-700 shadow-xl mb-6">
          <img 
            src="/portfolio/myImg.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h5 className="text-xl md:text-xl font-bold text-navy-800 dark:text-white">AI & Software Engineer</h5>
        {/* <p className="text-lg md:text-xl text-navy-600 dark:text-gray-400">Full Stack Development</p> */}
      </div>
    </div>
  </div>
</div>

        
      </div>
    </section>
  );
};

export default HeroSection;
