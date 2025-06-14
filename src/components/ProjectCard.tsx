import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    demoLink: string;
    codeLink: string;
    features: string[];
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2">
              
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1a2235] mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#1a2235] mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {project.features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                <Star size={10} className="mr-1 text-[#00aaff]" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[#1a2235] mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-[#00aaff]/10 to-[#0088cc]/10 text-[#1a2235] px-3 py-1 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;