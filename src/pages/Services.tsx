import {
  Monitor,
  Server,
  Smartphone,
  Database,
  Code,
  Settings,
} from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    icon: 'monitor',
    title: 'Frontend Development',
    description:
      'Building responsive, user-friendly web applications using React, Next.js, TypeScript, and Tailwind CSS. Delivering pixel-perfect interfaces with modern UI/UX principles.',
  },
  {
    id: 2,
    icon: 'server',
    title: 'Backend Development',
    description:
      'Developing robust server-side solutions with Node.js, Express.js, and FastAPI. Building secure RESTful APIs and microservices architecture for scalable applications.',
  },
  {
    id: 3,
    icon: 'code',
    title: 'Full Stack Solutions',
    description:
      'End-to-end web application development using MERN stack and Python-based backends. From database design to deployment, delivering complete solutions.',
  },
  {
    id: 4,
    icon: 'database',
    title: 'Database Management',
    description:
      'Designing and managing databases with MongoDB, PostgreSQL, and MySQL. Building efficient data models and optimizing queries for high-performance applications.',
  },
  {
    id: 5,
    icon: 'smartphone',
    title: 'Responsive Design',
    description:
      'Creating mobile-first, cross-browser compatible web applications. Ensuring seamless user experience across all devices with modern CSS frameworks.',
  },
  {
    id: 6,
    icon: 'settings',
    title: 'API Development',
    description:
      'Building and integrating RESTful APIs with JWT authentication, rate limiting, and caching. Developing high-performance API gateways for microservices.',
  },
];

const getIcon = (iconName: string) => {
  const iconProps = { size: 32, strokeWidth: 1.5 };
  switch (iconName) {
    case 'monitor':
      return <Monitor {...iconProps} />;
    case 'server':
      return <Server {...iconProps} />;
    case 'code':
      return <Code {...iconProps} />;
    case 'smartphone':
      return <Smartphone {...iconProps} />;
    case 'database':
      return <Database {...iconProps} />;
    case 'settings':
      return <Settings {...iconProps} />;
    default:
      return <Monitor {...iconProps} />;
  }
};

export default function Services() {
  return (
    <section className="section animate-fade-in">
      <div className="section-header">
        <h2 className="section-title">
          My <span className="highlight">Services</span>
        </h2>
        <p className="section-subtitle">What I can do for you</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{getIcon(service.icon)}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
