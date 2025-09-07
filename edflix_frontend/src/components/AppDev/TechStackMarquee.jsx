import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Zap,
  Shield,
  Server,
  Wifi,
  Database,
  Terminal,
  Bug,
  Smartphone,
  Code,
  Cloud,
  FileCode,
  Key
} from 'lucide-react';

const TechStackMarquee = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const techStack = [
    { name: 'Burp Suite', icon: Shield },
    { name: 'OWASP ZAP', icon: Zap },
    { name: 'Nmap', icon: Terminal },
    { name: 'Metasploit', icon: Bug },
    { name: 'Wireshark', icon: Wifi },
    { name: 'MobSF', icon: Smartphone },
    { name: 'Kali Linux', icon: Code },
    { name: 'Nessus', icon: Key },
    { name: 'Snort', icon: Server },
    { name: 'Splunk', icon: Cloud },
    { name: 'MongoDB', icon: Database },
    { name: 'Python', icon: FileCode }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Tools{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              We Use For Security Testing
            </span>{' '}
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="relative bg-white overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

            <div className="py-12 px-8">
              <div className="marquee-container">
                <div className="marquee-content">
                  {/* First set of icons */}
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={`first-${index}`} className="marquee-item" data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="tech-icon-container group">
                          <div className="relative icon-square">
                            <div className="absolute bg-white p-1 -top-6 -left-3 text-gray-400 text-2xl">+</div>
                            <div className="absolute bg-white p-1 -top-6 -right-3 text-gray-400 text-2xl">+</div>
                            <div className="absolute bg-white p-1 -bottom-4 -left-3 text-gray-400 text-2xl">+</div>
                            <div className="absolute bg-white p-1 -bottom-4 -right-3 text-gray-400 text-2xl">+</div>
                            <IconComponent className="w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-red-600 group-hover:scale-110" />
                          </div>
                          <span className="tech-name">{tech.name}</span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Duplicate set for seamless loop */}
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={`second-${index}`} className="marquee-item">
                        <div className="tech-icon-container group">
                          <div className="relative icon-square">
                            <div className="absolute bg-white p-1 -top-6 -left-3 text-gray-400 text-2xl">+</div>
                            <div className="absolute bg-white p-1 -top-6 -right-3 text-gray-400 text-2xl">+</div>
                            <div className="absolute bg-white p-1 -bottom-4 -left-3 text-gray-400 text-2xl">+</div>
                            <div className="absolute bg-white p-1 -bottom-4 -right-3 text-gray-400 text-2xl">+</div>
                            <IconComponent className="w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-red-600 group-hover:scale-110" />
                          </div>
                          <span className="tech-name">{tech.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }

        .marquee-item {
          flex-shrink: 0;
        }

        .tech-icon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 1rem 1rem 1rem;
          border-radius: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .icon-square {
          width: 10rem;
          height: 10rem;
          border: 2px solid #E5E7EB;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          transition: all 0.3s ease;
        }

        .tech-icon-container:hover .icon-square {
          border-color: #EF4444;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
          transform: translateY(-2px);
        }

        .tech-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #4B5563;
          text-align: center;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStackMarquee;
