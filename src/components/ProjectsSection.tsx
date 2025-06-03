
import { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Request Tracker AI Extension",
    description: "Built a GenAI extension for Request Tracker (an open-source tool from Best Practical Solutions Inc.), automating ticket workflows with GPT and Llama integration, saving 15+ hours weekly. Added sentiment analysis and summarization to speed up priority handling by 50%, and enabled multilingual support for users across 18+ countries.",
    image: "/portfolio/best_practical.png",
    tags: ["GenAI", "LLMs", "GPT", "Perl", "TypeScript"],
    githubUrl: "https://github.com/ParagShah97/rt-extension-ai",
    liveUrl: "https://www.youtube.com/watch?v=LIk5XkCJLHo&t=6s",
    buttonLabel: ""
  },
  {
    id: 2,
    title: "Lighthouse Free Medical Clinic NGO",
    description: "Partnered with Lighthouse Free Medical Clinic to build an AI-powered platform that recommends healthcare plans for underrepresented communities. Leveraged NLP to match users with 100+ government-aided insurance programs, benefiting 1,000+ immigrants. Developed a full-stack e-commerce-style interface focused on accessibility, including voice-assisted navigation and an AI chatbot trained on 10K+ medical queries to guide users through their options.",
    image: "/portfolio/lighthouse.png",
    tags: ["Healthcare", "LLaMa", "React", "FastAPI", "LLMs"],
    githubUrl: "",
    liveUrl: "https://www.youtube.com/watch?v=Zk2ihwav3q8&t=7s"
  },
  {
    id: 3,
    title: "E-commerce Scalable Microservices Architecture",
    description: "Built a robust microservices platform using Spring Boot, featuring Eureka for service discovery, centralized config management, and secure OAuth2 integration with Okta. Deployed containerized services via Docker and Kubernetes, with CI/CD automation through Jenkins and SonarQube. Enabled resilient, scalable operations with API Gateway, Redis caching, and circuit breaking.",
    image: "/portfolio/ecommerce.png",
    tags: ["Java", "Spring Boot", "MySQL", "AWS", "Docker", "Redis", "Kubernates", "SonarQube"],
    githubUrl: "https://github.com/ParagShah97/InventraX",
    liveUrl: ""
  },
  {
    id: 4,
    title: "Advertisement Recommendation Engine",
    description: "Built an end-to-end AI ad recommendation platform using custom-implemented DenseNet, VGG-16, ResNet-50, and AlexNet models trained on 100K+ images. Designed a social media-style UI with real-time image analysis (0.1s response time) and asynchronous REST APIs. Boosted model accuracy by 30% through advanced tuning and optimization techniques.",
    image: "/portfolio/add_recomm.png",
    tags: ["Streamlit", "Python", "PyTorch", "Deep Learning", "CNN", "PostgreSQL"],
    githubUrl: "https://github.com/ParagShah97/pixAds-AI",
    liveUrl: ""
  },
  {
    id: 5,
    title: "Custom High-Performance ORM Framework",
    description: "Developed a Java-based ORM framework inspired by Hibernate, enabling annotation-driven mapping and dynamic SQL generation via reflection. Designed to replace raw JDBC, it helps Java developers reduce boilerplate code and save significant development time. Supported 10+ annotation types, nested queries, and schema-level validations, boosting efficiency and cutting runtime errors by 40%. Optimized transaction handling, connection pooling, and exception management for high-performance CRUD operations.",
    image: "/portfolio/orm.png",
    tags: ["Low-Level Design", "Java Reflection", "Exception Handling", "SQL", "XML"],
    githubUrl: "https://github.com/ParagShah97/ORMFramework",
    liveUrl: ""
  },
  {
    id: 6,
    title: "Find More Projects",
    description: "Passionate about building projects that simplify life for end users and fellow developers. Check out my other work!",
    image: "/portfolio/other_proj.png",
    tags: ["Software Engineering Projects"],
    githubUrl: "https://github.com/ParagShah97",
    liveUrl: ""
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projectsData.length));
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-navy-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="solid-maroon">Projects</span>
          </h2>
          <p className="text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique problem-solving journey showcasing different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {visibleProjects < projectsData.length && (
          <div className="flex justify-center mt-12">
            <Button 
              onClick={showMoreProjects} 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
            >
              Show More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
