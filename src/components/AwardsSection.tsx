
import { ScrollArea } from "@/components/ui/scroll-area";
import { Award, Trophy, MapPin } from "lucide-react";

interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: "award" | "certificate";
  description?: string;
  imageUrl: string;
}

const awards: AwardItem[] = [
  {
    id: 1,
    title: "Technical Excellence Award",
    issuer: "Tata Consultancy Services",
    date: "September 2023",
    type: "award",
    description: "Awarded for Outstanding Contribution.",
    imageUrl: "/portfolio/tech_excel.jpg"
  },
  {
    id: 2,
    title: "Service and Commitment Award",
    issuer: "Tata Consultancy Services",
    date: "September 2023",
    type: "award",
    description: "Service Commitment for 3 years of contribution.",
    imageUrl: "/portfolio/commit-awd.jpg"
  },
  {
    id: 3,
    title: "Star of the Month Award",
    issuer: "Tata Consultancy Services",
    date: "July 2022",
    type: "award",
    description: "Delivered production releases with exceptional precision.",
    imageUrl: "/portfolio/star_mnt_awd.jpg"
  },
  {
    id: 4,
    title: "Xcelerate Warrior",
    issuer: "Tata Consultancy Services",
    date: "June 2022",
    type: "award",
    description: "Mentoring juniors on new functionalities",
    imageUrl: "/portfolio/warr_awd.jpg"
  },
  {
    id: 5,
    title: "Best Team Award",
    issuer: "Tata Consultancy Services", 
    date: "March 2021",
    type: "award",
    description: "Exceptional team work.",
    imageUrl: "/portfolio/best_team.jpg"
  },
  {
    id: 6,
    title: "Leetcode Badges",
    issuer: "Leetcode",
    date: "March 2025",
    type: "certificate",
    imageUrl: "/portfolio/LeetCode_Badges.jpg"
  },
  {
    id: 7,
    title: "AI/ML and Deep Learning",
    issuer: "Bennett University",
    date: "July 2019",
    type: "certificate",
    imageUrl: "/portfolio/AI_bennit.jpg"
  },
  {
    id: 8,
    title: "Published Research Paper",
    issuer: "IJSREM Journal",
    date: "April 2020",
    type: "certificate",
    imageUrl: "/portfolio/research_ppr.jpg"
  },
  {
    id: 9,
    title: "Docker for Developers",
    issuer: "LinkedIn",
    date: "May 2025",
    type: "certificate",
    imageUrl: "/portfolio/docker.jpg"
  },
  {
    id: 10,
    title: "Oracle Database Fundamentals",
    issuer: "Oracle",
    date: "February 2025",
    type: "certificate",
    imageUrl: "/portfolio/oracle_dbms_cert.jpg"
  },
  {
    id: 10,
    title: "Javascript Fundamentals",
    issuer: "HackerRank",
    date: "May 2025",
    type: "certificate",
    imageUrl: "/portfolio/js_basics.jpg"
  }
];

const AwardsSection = () => {
  const getIcon = (type: string) => {
    if (type === "award") {
      return <Trophy className="w-5 h-5 text-primary" />;
    } else {
      return <Award className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="awards" className="section-padding bg-gray-50 dark:bg-navy-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & <span className="solid-maroon">Certifications</span>
          </h2>
          <p className="text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and professional qualifications earned throughout my career
          </p>
        </div>

        <ScrollArea className="w-full overflow-hidden pb-6">
          <div className="flex w-max space-x-6 md:space-x-8 px-1 auto-scroll-container">
            {[...awards, ...awards].map((award, index) => (
              <div
                key={`${award.id}-${index}`}
                className="flex-none w-[280px] md:w-[320px] bg-white dark:bg-navy-800/30 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] shadow-sm hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={award.imageUrl}
                    alt={award.title}
                    className="w-full h-full object-fill transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white dark:bg-navy-800 rounded-full p-2 shadow-md">
                    {getIcon(award.type)}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-navy-800 dark:text-white">
                      {award.title}
                    </h3>
                    <span className="text-xs uppercase font-medium tracking-wider bg-gray-100 dark:bg-navy-700 text-navy-500 dark:text-navy-300 rounded-full px-3 py-1">
                      {award.type}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-navy-600 dark:text-gray-400 mb-3">
                    <span>{award.issuer}</span>
                    <span>{award.date}</span>
                  </div>
                  {award.description && (
                    <p className="text-sm text-navy-700 dark:text-gray-300 mt-2">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

      </div>
    </section>
  );
};

export default AwardsSection;
