import {
  Globe,
  Dumbbell,
  MessageSquare,
  ShoppingBag,
  ShoppingCart,
  ExternalLink,
  Github,
} from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
}

const portfolioItems: ProjectItem[] = [
  {
    id: 1,
    title: 'Zeminent',
    description: 'Professional business website with modern UI/UX design',
    icon: 'globe',
    liveUrl: 'https://www.zeminent.com/',
    githubUrl: 'https://github.com/SNMurthy2003/zeminent',
  },
  {
    id: 2,
    title: 'Expense Tracker',
    description: 'Full-stack expense tracking app with React & modern UI',
    icon: 'shopping-bag',
    liveUrl: 'https://expense-tracker-neon-six-36.vercel.app',
    githubUrl: 'https://github.com/SNMurthy2003/Expense-Tracker',
  },
  {
    id: 3,
    title: 'E-Commerce',
    description: 'Used most favorites of web developers library called React and Next.js frameworks',
    icon: 'shopping-cart',
    liveUrl: 'https://e-commerce-mu-neon.vercel.app',
    githubUrl: 'https://github.com/SNMurthy2003/e-commerce',
  },
  {
    id: 4,
    title: 'Gym Tracker',
    description: 'Fitness tracking app to monitor workouts and progress',
    icon: 'dumbbell',
    liveUrl: 'https://gym-tracker-mbvx.vercel.app',
    githubUrl: 'https://github.com/SNMurthy2003/Gym-Tracker',
  },
];

const getIcon = (iconName: string) => {
  const iconProps = { size: 64, strokeWidth: 1 };
  switch (iconName) {
    case 'globe':
      return <Globe {...iconProps} />;
    case 'dumbbell':
      return <Dumbbell {...iconProps} />;
    case 'message-square':
      return <MessageSquare {...iconProps} />;
    case 'shopping-bag':
      return <ShoppingBag {...iconProps} />;
    case 'shopping-cart':
      return <ShoppingCart {...iconProps} />;
    default:
      return <Globe {...iconProps} />;
  }
};

export default function Portfolio() {
  return (
    <section className="section animate-fade-in">
      <div className="section-header">
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>
        <p className="section-subtitle">Recent projects I've worked on</p>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item animate-fade-in">
            <div className="portfolio-image">
              <div className="portfolio-placeholder">{getIcon(item.icon)}</div>
              <div className="portfolio-overlay">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="portfolio-links">
                  <a
                    href={item.liveUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link"
                    aria-label="View live site"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={item.githubUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link"
                    aria-label="View source code"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
