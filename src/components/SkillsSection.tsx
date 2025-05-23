
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const SkillsSection = () => {
  const skills = {
    "Generative AI": [
      "PyTorch",
      "LangChain",
      "LLMs",
      "Chromadb",
      "Machine Learning",
      "Deep Learning" 
    ],
    "Backend Technologies": [
      "Java",
      "Node.js",
      "Spring Boot",
      "Hibernate",
      "Juint",
      "Express.js",
      "Maven/Grade",
      "Okta"
    ],
    "Frontend Technologies": [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Material UI",
      "Angular",
      "RxJs",      
      "HTML & CSS"
    ],    
    "Deployment": [
      "Docker",
      "Kubernates",
      "Github Action",
      "Jenkins",
      "CI/CD",
      "AWS (EC2, Lambda, S3, RDS)",
    ],
    "Databases": [
      "MongoDB",
      "DynamoDB",
      "PostgreSQL",
      "Oracle",
      "Redis"
    ],    
    "Tools & Others": [
      "Git & GitHub",
      "Unit Testing",
      "Integration Testing",
      "Agile/Scrum",
      "Jira"
    ]
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="solid-maroon">Skills</span>
          </h2>
          <p className="text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's an overview of my technical expertise.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(skills).map(([category, items]) => (
              <AccordionItem key={category} value={category}>
                <AccordionTrigger className="text-lg font-medium">
                  {category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                    {items.map((skill) => (
                      <div 
                        key={skill} 
                        className="bg-white dark:bg-navy-800/50 px-4 py-2 rounded-lg border border-gray-100 dark:border-navy-700 text-navy-700 dark:text-gray-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-navy-800/50 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-navy-700">
            <div className="font-bold text-3xl text-primary mb-4">3+</div>
            <p className="text-navy-700 dark:text-gray-300">Years Experience</p>
          </div>
          <div className="bg-white dark:bg-navy-800/50 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-navy-700">
            <div className="font-bold text-3xl text-primary mb-4">20+</div>
            <p className="text-navy-700 dark:text-gray-300">Projects Completed</p>
          </div>
          {/* <div className="bg-white dark:bg-navy-800/50 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-navy-700">
            <div className="font-bold text-3xl text-primary mb-2">15+</div>
            <p className="text-navy-700 dark:text-gray-300">Technologies Used</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
