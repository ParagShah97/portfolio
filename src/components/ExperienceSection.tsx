
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
    title: "AI Engineer Intern",
    company: "Best Practical Solutions",
    period: "Aug 2024 - Dec 2024",
    description: ["Reduced weekly ticket resolution time by 10+ hours by designing a GenAI extension for the Request Tracker system, leveraging LLMs (ChatGPT, LLaMA) for AI-powered autosuggestions",
       "Improved identification of priority issues by 50% through sentiment analysis and automated ticket summarization.",
      "Enabled language support across 18+ countries by integrating multilingual autocomplete and AI-driven response generation."]
  },
  {
    id: 2,
    title: "Software Engineer II",
    company: "Moody's Analytics | @ TCS",
    period: "Mar 2022 - Dec 2023",
    description: ["Led fintech projects at Moody’s Analytics, benefiting 400,000+ customers across 5 banks by developing a Credit Risk and Investment Monitoring system using Java Spring Boot, PostgreSQL, AWS (backend), and Next.js, React, Material UI (frontend).",
      "Partnered with cross-functional teams to develop ML solutions, building an NLP model with 95% accuracy for financial record analysis and deploying XGBoost & LightGBM on live trending data to drive real-time insights.",
      "Boosted KPI visibility and business insights 2x by designing data models from a Redshift data warehouse and integrating Sisense dashboards for over 10M financial trend records",
      "Accelerated testing and deployment process by 3x through test-driven development, achieving 80% unit-testing coverage with Junit & Mockito, comprehensive automation testing, peer reviews, and feature documentation.",
      "Delivered 10+ production releases and managed DevOps workflows across Dev, CI, UAT, and Prod environments using Docker and GitHub Actions, with performance monitoring via Datadog"
    ]
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "TMB Thanachart Bank  | @ TCS",
    period: "Sep 2020 - Feb 2022 ",
    description: ["•	Boosted customer acquisition by 30% by launching a full-featured banking app with E-KYC, payments, and investment modules, in collaboration with product and QA teams.",
      "Reduced developer effort by 50% and 2x component reusability by developing 20+ scalable UI/UX components using React.js",
      "•	Enhanced SEO by 35% and cut API latency by 40% by migrating a monolithic system to Java Spring microservices, implementing swagger documented GraphQL and RESTful APIs, and enabling server-side rendering with Next.js."
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
