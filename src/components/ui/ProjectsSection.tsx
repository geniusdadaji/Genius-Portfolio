
import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Image Generator",
      description: "A deep learning model that generates creative images from text descriptions using DALL-E API.",
      technologies: ["Python", "PyTorch", "React", "OpenAI API"],
      githubLink: "https://github.com/yourusername/ai-image-generator",
      liveLink: "https://ai-image-generator-demo.com",
      image: "/placeholder.svg"
    },
    {
      title: "Smart Task Manager",
      description: "An intelligent task management application with priority prediction and deadline recommendations.",
      technologies: ["React", "Node.js", "MongoDB", "Machine Learning"],
      githubLink: "https://github.com/yourusername/smart-task-manager",
      liveLink: "https://smart-task-manager.com",
      image: "/placeholder.svg"
    },
    {
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      githubLink: "https://github.com/yourusername/blockchain-voting",
      liveLink: "https://blockchain-voting-demo.com",
      image: "/placeholder.svg"
    },
    {
      title: "Healthcare ML Analysis",
      description: "Machine learning model for analyzing medical data and predicting patient outcomes.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask"],
      githubLink: "https://github.com/yourusername/healthcare-ml",
      liveLink: "https://healthcare-ml-demo.com",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Link className="w-5 h-5" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
