
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-navy-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me as a software engineer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-navy-800 dark:text-white">
              My Journey
            </h3>
            
            <p className="text-navy-700 dark:text-gray-300">
              Hello! I'm [Your Name], a passionate software engineer with a love for creating elegant solutions to complex problems. My journey in tech started during my university years, where I discovered the joy of turning ideas into functional software.
            </p>
            
            <p className="text-navy-700 dark:text-gray-300">
              I specialize in full-stack development, with a particular focus on building robust and scalable web applications. My approach combines technical expertise with a deep understanding of user needs to deliver exceptional digital experiences.
            </p>
            
            <p className="text-navy-700 dark:text-gray-300">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and mentorship.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-navy-800 dark:text-white">Personal Info</h4>
                  <ul className="space-y-2 text-navy-700 dark:text-gray-300">
                    <li><strong>Name:</strong> Your Name</li>
                    <li><strong>Email:</strong> your.email@example.com</li>
                    <li><strong>Location:</strong> City, Country</li>
                    <li><strong>Languages:</strong> English, [Other Languages]</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-navy-800 dark:text-white">Experience</h4>
                  <ul className="space-y-4 text-navy-700 dark:text-gray-300">
                    <li>
                      <div className="font-medium">Senior Software Engineer</div>
                      <div className="text-sm text-navy-600 dark:text-gray-400">Company Name | 2021 - Present</div>
                    </li>
                    <li>
                      <div className="font-medium">Software Developer</div>
                      <div className="text-sm text-navy-600 dark:text-gray-400">Company Name | 2019 - 2021</div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-navy-800 dark:text-white">Education</h4>
                  <ul className="space-y-4 text-navy-700 dark:text-gray-300">
                    <li>
                      <div className="font-medium">BSc Computer Science</div>
                      <div className="text-sm text-navy-600 dark:text-gray-400">University Name | 2015 - 2019</div>
                    </li>
                    <li>
                      <div className="font-medium">Specialized Certifications</div>
                      <div className="text-sm text-navy-600 dark:text-gray-400">Relevant certifications or courses</div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
