
import { Book, GraduationCap, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
  coursework: string[];
}

const educationItems: EducationItem[] = [
  {
    id: 1,
    degree: "Master of Computer Science and Engineering in AI",
    institution: "State University of New York at Buffalo",
    period: "2024 - 2025",
    description: "Specialized in Artificial Intelligence and Machine Learning with focus on neural networks and computer vision applications.",
    achievements: [
      "Graduated with honors (GPA: 3.97/4.0)",
      "Head Teaching Assistance for course Theory Of Computation under Prof Xiangyu Guo",
      "Teaching Assistance for course Analysis of Algorithms under Prof Kelin Luo"
    ],
    coursework: [
      "Advanced Machine Learning",
      "Deep Learning (LLMs, GenAI)",
      "Analysis of Algorithms",
      "Distributed Systems"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science and Engineering",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    period: "2016 - 2020",
    description: "Strong foundation in computer science fundamentals, with specialization in software engineering and data structures.",
    achievements: [
      "Graduated with honors (GPA: 3.5/4.0)",
      "Published a research Paper titled 'Text Preprocessing & Comparative Study of Cosine Similarity & TF-IDF' in the IJSREM Journal"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Web Development"
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="solid-maroon">Education</span>
          </h2>
          <p className="text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications that have shaped my professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationItems.map((edu, index) => (
            <div key={edu.id} className="flex mb-12">
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center mr-4 md:mr-8">
                <div className={cn(
                  "w-3 h-3 rounded-full bg-primary z-10",
                  "ring-4 ring-primary/20"
                )}></div>
                {index !== educationItems.length - 1 && (
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
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-sm text-navy-500 dark:text-gray-400">
                    <GraduationCap size={14} className="mr-1" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <div className="text-navy-600 dark:text-gray-300 text-sm mb-3">
                  {edu.institution}
                </div>
                <p className="text-navy-700 dark:text-gray-400 mb-4">
                  {edu.description}
                </p>
                
                {/* Achievements */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    <h4 className="font-semibold text-navy-800 dark:text-white">Achievements</h4>
                  </div>
                  <ul className="list-disc list-inside text-sm text-navy-700 dark:text-gray-400 pl-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Coursework */}
                <div>
                  <div className="flex items-center mb-2">
                    <Book className="h-4 w-4 mr-2 text-primary" />
                    <h4 className="font-semibold text-navy-800 dark:text-white">Related Coursework</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.coursework.map((course, i) => (
                      <div 
                        key={i} 
                        className="bg-gray-50 dark:bg-navy-800/50 px-3 py-1.5 text-sm rounded-md border border-gray-100 dark:border-navy-700"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
