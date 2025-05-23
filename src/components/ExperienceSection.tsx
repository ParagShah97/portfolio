
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Best Practical Solutions",
    period: "Aug 2024 - Dec 2024",
    description: ["Built a GenAI extension for Request Tracker, integrating GPT and Llama models with configurable workflows, saving 15+ hours weekly in ticket resolution.", "Enhanced global support by enabling multilingual autocomplete and sentiment-aware responses, accelerating priority issue resolution by 50%."]
  },
  {
    id: 2,
    title: "Software Engineer II",
    company: "Tata Consultancy Services | @ Moody's Analytics",
    period: "Mar 2022 - Dec 2023",
    description: ["Led Credit Monitoring and AI-driven Financial Spreading projects at Moody’s Analytics, impacting 400K+ customers across 5+ banks.",
      "Built a full-stack portfolio management platform with 10 production releases, integrating scalable services for credit analysis.",
      "Engineered an NLP-powered financial spreading tool with 95% accuracy, streamlining risk evaluation and loan processing.",
      "Designed models for 10M+ financial trend records and integrated Sisense dashboards, boosting business insights by 45%.",
      "Improved engineering quality with 80% test coverage, Docker-based DevOps, and CI/CD automation across 4 environments."
    ]
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Tata Consultancy Services | @ TTB Bank",
    period: "Sep 2020 - Feb 2022 ",
    description: ["Partnered with product and QA teams at TTB Bank to launch a customer-centric banking app with E-KYC, payment, and investment workflows, enhanced user experience 5x with faster load time, and increased customer acquisitions by 30%",
      "Improved component reusability by 2x through developing 20+ core UI/UX components, reducing developer effort by 50%. ",
      "Revamped the backend by migrating a legacy application to a modern architecture with embedded GraphQL and RESTful APIs, reduced response time by 55%, and improved SEO by 35% through server-side rendering. "
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-navy-800/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="solid-maroon">Experience</span>
          </h2>
          <p className="text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and career highlights in the software development industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="flex mb-8 md:mb-12">
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center mr-4 md:mr-8">
                <div className={cn(
                  "w-3 h-3 rounded-full bg-primary z-10",
                  "ring-4 ring-primary/20"
                )}></div>
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 bg-gray-200 dark:bg-gray-700 h-full flex-grow mt-1"></div>
                )}
              </div>

              {/* Content */}
              <div className={cn(
                "bg-white dark:bg-navy-800/30 p-5 md:p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800",
                "flex-grow transition-all duration-300 hover:shadow-md",
                "animate-fade-in"
              )}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-navy-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-sm text-navy-500 dark:text-gray-400">
                    <Clock size={14} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="text-navy-600 dark:text-gray-300 text-sm mb-3">
                  {exp.company}
                </div>
                <p className="text-navy-700 dark:text-gray-400">
                  {exp.description.map((des) => (
                    <li>{des}</li>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
