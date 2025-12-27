import { Home, User, List, Briefcase, Mail } from 'lucide-react';
import { PageType } from '../types';

interface SidebarProps {
  activePage: PageType;
  onPageChange: (page: PageType) => void;
}

const navItems: { id: PageType; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: List },
  { id: 'portfolio', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({ activePage, onPageChange }: SidebarProps) {
  return (
    <nav className="sidebar">
      {/* Logo */}
      <div className="logo">
        <div className="logo-bracket left" />
        <span className="logo-text">Atlas</span>
        <div className="logo-bracket right" />
      </div>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        {navItems.map(({ id, label, icon: Icon }) => (
          <li key={id} className="nav-item">
            <button
              onClick={() => onPageChange(id)}
              className={`nav-link ${activePage === id ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
