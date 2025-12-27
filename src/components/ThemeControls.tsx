import { useState } from 'react';
import { Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeColor } from '../types';

const themeColors: ThemeColor[] = [
  '#ff3b3b',
  '#ff9500',
  '#00c853',
  '#2979ff',
  '#ff4081',
];

export default function ThemeControls() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { accentColor, setAccentColor, themeMode, toggleThemeMode } = useTheme();

  return (
    <div className="theme-controls">
      <button
        className="settings-btn"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        aria-label="Theme settings"
      >
        <Settings size={18} />
      </button>

      <button
        className="settings-btn"
        onClick={toggleThemeMode}
        aria-label="Toggle dark/light mode"
      >
        {themeMode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className={`theme-panel ${isPanelOpen ? 'active' : ''}`}>
        <span className="theme-title">Theme Colors</span>
        <div className="theme-colors">
          {themeColors.map((color) => (
            <button
              key={color}
              className={`color-btn ${accentColor === color ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => {
                setAccentColor(color);
                setIsPanelOpen(false);
              }}
              aria-label={`Set theme color to ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
