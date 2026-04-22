/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, 
  BookOpen, 
  Rocket, 
  Layers, 
  CheckCircle2, 
  Users, 
  Smartphone, 
  Cloud, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Laptop,
  GraduationCap,
  Briefcase,
  Globe,
  Settings,
  Star
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white h-16 border-b border-slate-200 shadow-sm' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-8 h-full flex justify-between items-center text-slate-900">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800 uppercase">Starkashi<span className="text-blue-600">Tech</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-slate-800 transition-all shadow-sm">
            <a href="student_form.html >studentform</a>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium py-2 border-b border-slate-50 text-slate-600"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-slate-900 text-white p-3 rounded-full text-center font-bold text-xs">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center pt-24 pb-16 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="bg-slate-900 rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden flex flex-col justify-center min-h-[500px]"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-500/10">Empowering Innovation</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 max-w-2xl">
              Innovative Technology & <br/>
              <span className="text-blue-400">Career-Focused</span> Training
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mb-10 leading-relaxed">
              Bridging the gap between education and industry through innovation, training, and real-world projects. Starkashi Technologies empowers individuals and businesses with modern digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-xl shadow-blue-500/20">Explore Services</button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all">Join Training</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ children, highlight, subtitle, center = false }: { children: React.ReactNode, highlight?: string, subtitle?: string, center?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-4 leading-tight">
      {children} <span className="text-blue-600">{highlight}</span>
    </h2>
    {subtitle && <p className="text-sm text-slate-500 font-medium leading-relaxed">{subtitle}</p>}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-blue-600"></span> ABOUT OUR MISSION
            </div>
            <SectionHeading highlight="Excellence">Bridging Industry Gaps With</SectionHeading>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Starkashi Technologies is a modern technology and skill development company committed to delivering digital solutions for businesses and practical learning opportunities for students. 
            </p>
            <p className="text-lg text-slate-500 mb-8">
              We bridge the gap between education and industry through innovation, training, and real-world projects. Our goal is to empower individuals with the skills they need to thrive in the digital economy.
            </p>
            <div className="grid grid-cols-2 gap-6 pb-4">
              <div className="flex items-start gap-3">
                <div className="mt-1"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Expert Trainers</h4>
                  <p className="text-sm text-slate-500">Learners guided by pioneers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Modern Tech</h4>
                  <p className="text-sm text-slate-500">Always up-to-date with trends.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="pt-12">
              <img 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover" 
                alt="Practical Learning" 
              />
            </div>
            <div>
              <img 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover" 
                alt="Business Solutions" 
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl text-center min-w-[200px]">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-sm font-medium uppercase tracking-widest text-blue-100">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, items, accentColor = 'blue' }: { icon: any, title: string, description: string, items?: string[], accentColor?: 'blue' | 'indigo' | 'green' }) => {
  const colors = {
    blue: 'text-blue-600 bg-blue-500',
    indigo: 'text-indigo-600 bg-indigo-500',
    green: 'text-green-600 bg-green-500',
  };
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col"
    >
      <h3 className={`${colors[accentColor].split(' ')[0]} text-[10px] font-bold uppercase tracking-[0.2em] mb-4`}>{title}</h3>
      <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">{description}</p>
      {items && (
        <ul className="space-y-3 mt-auto pt-6 border-t border-slate-50">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-[13px] text-slate-500 font-bold">
              <div className={`w-1.5 h-1.5 rounded-full ${colors[accentColor].split(' ')[1]}`} />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          center
          highlight="Opportunities"
          subtitle="Explore our comprehensive suite of solutions designed for digital success."
        >
          Building Skills &
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
           <ServiceCard 
              icon={Laptop}
              title="Technology Services"
              description="High-performance custom software, web and app development tailored to your brand identity."
              items={['Web & App Development', 'Cloud & IT Solutions', 'Business Automation']}
              accentColor="blue"
           />
           <ServiceCard 
              icon={GraduationCap}
              title="Skill Development"
              description="Industry-focused training programs designed to bridge the gap between education and career."
              items={['Technical Training', 'Certification Hub', 'Placement Support']}
              accentColor="indigo"
           />
           <ServiceCard 
              icon={Rocket}
              title="Business Growth"
              description="From branding to deployment, we help startups and MSMEs scale their digital presence."
              items={['Branding Strategy', 'MVP Development', 'Startup Guidance']}
              accentColor="green"
           />
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="md:col-span-7"
        >
          <SectionHeading highlight="Value?">Why Choose Our</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Industrial Competency", desc: "Real-time projects for hands-on expertise.", icon: <Zap /> },
              { title: "Expert Mentorship", desc: "Trained by leads from top-tier companies.", icon: <Users /> },
              { title: "Modern Solutions", desc: "Scalable tech foundations for businesses.", icon: <Layers /> },
              { title: "Affordable Excellence", desc: "Quality driven results within your reach.", icon: <ShieldCheck /> }
            ].map((p, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-[32px] group hover:bg-white hover:shadow-md transition-all">
                <div className="text-blue-600 mb-4 scale-110 origin-left">{p.icon}</div>
                <h4 className="text-sm font-bold text-slate-800 mb-1 uppercase tracking-tight">{p.title}</h4>
                <p className="text-[12px] text-slate-500 leading-tight font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="md:col-span-5"
        >
          <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
             <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">Latest Feedback</p>
             <div className="bg-white/10 border border-white/10 p-6 rounded-[24px] backdrop-blur-sm relative z-10 italic text-[14px] leading-relaxed text-slate-100">
                "Professional website delivered on time with excellent support. Highly recommended for digital growth and practical learning experience."
                <div className="mt-4 not-italic font-bold text-blue-400">— Rajesh K., Startup Founder</div>
             </div>
             <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                   {[1,2,3].map(n => <img key={n} src={`https://i.pravatar.cc/150?u=${n+10}`} className="w-8 h-8 rounded-full border-2 border-slate-900 shadow-sm" />)}
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Trusted by 200+ Clients</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const feats = [
    { title: "Fast Delivery", desc: "Timely project completion for your business success.", icon: <Rocket className="w-5 h-5" /> },
    { title: "Trusted Support", desc: "24/7 assistance for all our products and services.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Modern Tech", desc: "Using latest frameworks like React and AI tools.", icon: <Code className="w-5 h-5" /> },
    { title: "Real-Time Learning", desc: "Work on live industry projects directly.", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Placement Assistance", desc: "Getting you ready for top-tier companies.", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Scalable Solutions", desc: "Growing our tech with your business needs.", icon: <Layers className="w-5 h-5" /> },
  ];

  return (
    <section id="features" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <SectionHeading highlight="Value" center>Delivering Maximum</SectionHeading>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feats.map((feat, idx) => (
            <motion.div 
               key={idx}
               whileHover={{ y: -5 }}
               className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="bg-blue-600/20 text-blue-400 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">{feat.icon}</div>
              <h4 className="text-xl font-bold mb-3">{feat.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { text: "Excellent training and real projects experience. I was able to land a job at a top tech company thanks to Starkashi.", author: "Rahul Sharma", role: "Software Engineer", img: "https://i.pravatar.cc/150?u=1" },
    { text: "Professional website delivered on time. The team at Starkashi understands business requirements perfectly.", author: "Priya V.", role: "Founder, Startup Hub", img: "https://i.pravatar.cc/150?u=2" },
    { text: "Best platform for skill development. The focus on practical learning sets them apart from typical institutes.", author: "Aman Gupta", role: "UI Designer", img: "https://i.pravatar.cc/150?u=3" },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading highlight="Impact" center>Creating Real</SectionHeading>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="bg-indigo-50 border border-indigo-100 p-8 rounded-[32px] flex flex-col h-full"
            >
              <p className="text-indigo-900 italic text-[15px] leading-relaxed mb-8">"{rev.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img referrerPolicy="no-referrer" src={rev.img} alt={rev.author} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <div className="font-bold text-slate-800 text-sm">{rev.author}</div>
                  <div className="text-[11px] text-indigo-600 font-bold uppercase tracking-wider">{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-5 bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Ready to grow?</h2>
            <p className="text-sm text-slate-500 font-medium mb-10 leading-relaxed">Let's discuss how Starkashi Technologies can help your business thrive or kickstart your tech career.</p>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-10 h-10 shrink-0 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Phone className="w-5 h-5" /></div>
                  <span className="font-bold text-sm tracking-tight">+91 9569970915</span>
               </div>
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-10 h-10 shrink-0 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Mail className="w-5 h-5" /></div>
                  <span className="font-bold text-sm tracking-tight">hello@starkashi.com</span>
               </div>
            </div>
            
            <div className="mt-12 flex gap-3">
               {['LN', 'TW', 'IG'].map(s => (
                 <a key={s} href="#" className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[10px] font-extrabold text-slate-400 hover:bg-blue-600 hover:text-white transition-all">{s}</a>
               ))}
            </div>
          </div>

          <div className="md:col-span-7 bg-slate-100 rounded-[40px] p-8 md:p-12 border border-dashed border-slate-300">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full h-14 px-6 rounded-2xl border-none bg-white text-xs font-bold shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                <input type="email" placeholder="Work Email" className="w-full h-14 px-6 rounded-2xl border-none bg-white text-xs font-bold shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <select className="w-full h-14 px-6 rounded-2xl border-none bg-white text-xs font-bold shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all">
                <option>Select Service</option>
                <option>Web Development</option>
                <option>Skill Training</option>
                <option>Startup Support</option>
              </select>
              <textarea placeholder="Your Message" rows={3} className="w-full p-6 rounded-2xl border-none bg-white text-xs font-bold shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-bold shadow-lg hover:bg-slate-800 transition-all uppercase tracking-widest">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
        <div>© 2024 Starkashi Technologies | All Rights Reserved</div>
        <div className="flex gap-8">
           <a href="#" className="hover:text-blue-600">Privacy</a>
           <a href="#" className="hover:text-blue-600">Terms</a>
           <span className="text-blue-600 font-extrabold">+91 9569970915</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
