import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#1a2235] to-[#2a3445] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#00aaff] rounded-lg flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:first.last@example.com" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                    sparkweb108@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#00aaff] rounded-lg flex items-center justify-center mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                    +91 90149 66517
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#00aaff] rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">Guntur, Andhra Pradesh, India (Remote Available)</p>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold text-[#00aaff] mb-2">Current Availability</h4>
              <p className="text-sm text-gray-300">
                ✅ Available for new projects starting January 2025. 
                Currently booking consultations for Q3 2025 projects.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#00aaff] focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#00aaff] focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#00aaff] focus:border-transparent outline-none transition-all text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00aaff] hover:bg-[#0088cc] disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {/* Form Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-green-300">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                  <p className="text-red-300">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
            </form>

            <p className="text-xs text-gray-400 mt-4">
              * Required fields. I typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;