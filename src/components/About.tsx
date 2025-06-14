import React from 'react';
import { Download, GraduationCap, Award, Users } from 'lucide-react';

const About = () => {
  const skills = [
    'React & Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'UI/UX Design',
    'MongoDB',
    'PostgreSQL',
    'AWS & Cloud',
    'REST APIs',
    'GraphQL',
    'Tailwind CSS',
    'Automation'
  ];

  return (
    <section id="about" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2235] mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate freelance developers with expertise in creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2235] mb-6">
              Building Digital Solutions That Matter
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 2 years of experience in web development, We specialize in creating modern, 
              scalable applications that solve real-world problems. Our journey began with a passion 
              for technology and has evolved into expertise in full-stack development, UI/UX design, 
              AI and process automation.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in writing clean, maintainable code and creating user experiences that are 
              both beautiful and functional. Whether you need a complete web application, an 
              e-commerce platform, or automation tools, We bring technical expertise and creative 
              problem-solving to every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Award className="text-[#00aaff] mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-[#1a2235]">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Users className="text-[#00aaff] mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-[#1a2235]">30+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <GraduationCap className="text-[#00aaff] mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-[#1a2235]">2+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <button className="inline-flex items-center bg-[#1a2235] hover:bg-[#2a3445] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2235] mb-6">
              Technical Skills
            </h3>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-[#00aaff]/10 to-[#0088cc]/10 text-[#1a2235] px-3 py-2 rounded-lg text-sm font-medium text-center hover:from-[#00aaff]/20 hover:to-[#0088cc]/20 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-[#1a2235] mb-4">Education & Certifications</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#00aaff]">
                  <h5 className="font-semibold text-[#1a2235]">Bachelor of Science in Computer Science - AI&ML</h5>
                  <p className="text-gray-600 text-sm">VVIT • 2021-2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#00aaff]">
                  <h5 className="font-semibold text-[#1a2235]">AWS Certified Developer</h5>
                  <p className="text-gray-600 text-sm">Amazon Web Services • 2023</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#00aaff]">
                  <h5 className="font-semibold text-[#1a2235]">React Professional Certificate</h5>
                  <p className="text-gray-600 text-sm">Meta • 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;