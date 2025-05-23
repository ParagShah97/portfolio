
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
            Feel free to reach out through any of the methods below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-navy-800 dark:text-white">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 dark:bg-navy-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 dark:bg-navy-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 dark:bg-navy-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-50 dark:bg-navy-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-navy-800 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-navy-800 dark:text-white">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-navy-600 dark:text-gray-400 hover:text-primary">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-navy-800 dark:text-white">GitHub</h4>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-navy-600 dark:text-gray-400 hover:text-primary">
                    github.com/yourusername
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-navy-800 dark:text-white">LinkedIn</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-navy-600 dark:text-gray-400 hover:text-primary">
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
              <h3 className="text-xl font-bold mb-4 text-navy-800 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-navy-600 dark:text-gray-400 mb-6">
                I'm currently available for freelance work, full-time positions, or interesting project collaborations.
              </p>
              <Button className="w-full" variant="outline" asChild>
                <a href="/path-to-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download My Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
