import { User } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { PageType } from '../types';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

const roles = [
  'Full Stack Developer',
  'Frontend Developer',
  'React Developer',
  'Python Developer',
  'MERN Stack Developer',
];

export default function Home({ onNavigate }: HomeProps) {
  const typingText = useTypingEffect({ words: roles });

  return (
    <section className="section section-home animate-fade-in">
      <div className="home-content">
        <div className="home-text">
          <h1 className="greeting">
            Hello, my name is <span className="name-highlight">Satyanarayana Murthy</span>
          </h1>
          <h2 className="title">
            I'm a <span className="typing-text">{typingText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="description">
            I'm a Full Stack Developer with 3+ years of experience building scalable
            web applications and backend systems. Proficient in Python, FastAPI, React,
            and TypeScript for developing robust full-stack solutions. Experienced in
            designing RESTful APIs, microservices architecture, and delivering responsive,
            user-friendly interfaces.
          </p>
          <button
            onClick={() => onNavigate('about')}
            className="btn btn-primary"
          >
            More About Me
          </button>
        </div>

        <div className="home-image">
          <div className="image-frame">
            <div className="corner-accent top-left" />
            <div className="corner-accent bottom-right" />
            <div className="profile-placeholder">
              <User size={120} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
