
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Github } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  buttonLabel?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 h-full flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fill object-center"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/50 text-navy-700 dark:text-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-navy-700 dark:text-gray-300">
          {project.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-4">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github size={16} /> Code
            </a>
          </Button>
        )}
        
        {project.liveUrl && (
          <Button size="sm" className="flex items-center gap-1" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Code size={16} /> Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
