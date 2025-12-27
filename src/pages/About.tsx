import { Code, Server, Wrench, Database, CheckCircle } from 'lucide-react';
import { PageType, SkillCategory, PersonalDetail } from '../types';

interface AboutProps {
  onNavigate: (page: PageType) => void;
}

const personalDetails: PersonalDetail[] = [
  { label: 'Name', value: 'Chebolu Satyanarayana Murthy' },
  { label: 'Experience', value: '3+ Years' },
  { label: 'Location', value: 'Hyderabad, India' },
  { label: 'Education', value: 'B.Tech CSE, IIIT Kottayam' },
];

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Frontend',
    icon: 'code',
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    id: 2,
    title: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs', 'Microservices'],
  },
  {
    id: 3,
    title: 'Database',
    icon: 'database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    id: 4,
    title: 'DevOps & Cloud',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Azure', 'Jenkins'],
  },
];

const responsibilities = [
  'Designing and implementing REST APIs',
  'Managing databases and backend business logic',
  'Integrating frontend with backend services',
  'Implementing data visualization and analytics',
  'Testing backend functionalities and ensuring system stability',
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'code':
      return <Code size={20} />;
    case 'server':
      return <Server size={20} />;
    case 'database':
      return <Database size={20} />;
    case 'wrench':
      return <Wrench size={20} />;
    default:
      return <Code size={20} />;
  }
};

export default function About({ onNavigate }: AboutProps) {
  return (
    <section className="section animate-fade-in">
      <div className="section-header">
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>
        <p className="section-subtitle">Get to know me better</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3 className="animate-slide-up">Professional Summary</h3>

          <div className="summary-content">
            <p className="animate-slide-up delay-1">
              Full Stack Developer with 3+ years of experience building scalable web applications.
              Proficient in Python, FastAPI, React, and TypeScript for robust full-stack solutions.
            </p>

            <p className="animate-slide-up delay-2">
              Skilled in RESTful APIs, microservices, MongoDB, and modern frontend development
              with React.js and Next.js. Committed to clean code and Agile collaboration.
            </p>

            <div className="responsibilities-section animate-slide-up delay-3">
              <p className="responsibilities-intro">
                Key responsibilities in my projects:
              </p>
              <ul className="responsibilities-list">
                {responsibilities.map((item, index) => (
                  <li key={index} className="responsibility-item" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    <CheckCircle size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-details animate-slide-up delay-4">
            {personalDetails.map((detail, index) => (
              <div
                key={detail.label}
                className="detail-item"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <span className="detail-label">{detail.label}:</span>
                <span className="detail-value">{detail.value}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="btn btn-primary animate-slide-up delay-5"
          >
            Get In Touch
          </button>
        </div>

        <div className="skills-section">
          <h3 className="animate-slide-up">Technical Expertise</h3>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div
                key={category.id}
                className="skill-category animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <h4>
                  {getIcon(category.icon)}
                  {category.title}
                </h4>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{ animationDelay: `${0.4 + index * 0.1 + skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
