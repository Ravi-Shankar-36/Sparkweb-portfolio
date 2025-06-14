import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Modern Blog Platform",
      description: "A full-stack blog platform with user authentication, comment system, tagging features, and rich text editor. Built with modern technologies for optimal performance and user experience.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      codeLink: "#",
      features: ["User Authentication", "Rich Text Editor", "Comment System", "Tag Management"]
    },
    {
      title: "E-commerce Store",
      description: "Responsive online store with shopping cart, product filtering, payment integration, and admin dashboard. Features modern UI with seamless checkout experience.",
      techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "Vercel"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      codeLink: "#",
      features: ["Shopping Cart", "Payment Integration", "Product Filters", "Admin Dashboard"]
    },
    {
      title: "Career Guidance Platform",
      description: "Student-focused portal for exploring career paths with interactive assessments, resource library, mentorship matching, and progress tracking features.",
      techStack: ["React", "Python", "Django", "PostgreSQL", "AWS", "Chart.js"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      codeLink: "#",
      features: ["Career Assessments", "Mentorship Matching", "Resource Library", "Progress Tracking"]
    },
    {
      title: "AI Document Parser",
      description: "Intelligent automation tool for extracting and organizing data from PDFs using AI models. Features batch processing, custom templates, and export capabilities.",
      techStack: ["Python", "OpenAI API", "FastAPI", "React", "PostgreSQL", "Docker"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      codeLink: "#",
      features: ["AI Data Extraction", "Batch Processing", "Custom Templates", "Export Options"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2235] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of recent work demonstrating expertise across different technologies and industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in seeing more work or discussing a custom project?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#00aaff] hover:bg-[#0088cc] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;