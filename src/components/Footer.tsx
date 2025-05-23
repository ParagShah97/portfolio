
import { Github, Linkedin, Mail, SquareCode } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="gradient-text">Passion</span>Driven
            </h3>
            <p className="text-gray-400 mt-2">
              Let's Build something meaningful!
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/ParagShah97" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/parag-shah97/" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/Parag_07/" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors">
              <SquareCode size={20} />
            </a>
            <a href="mailto:parag.shah97@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Parag Shah. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ by Parag Shah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
