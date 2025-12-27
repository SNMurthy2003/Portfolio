import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import ThemeControls from './components/ThemeControls';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { PageType } from './types';

function App() {
  const [activePage, setActivePage] = useState<PageType>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'about':
        return <About onNavigate={setActivePage} />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary font-poppins text-text-primary">
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
        <ThemeControls />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
