import { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Subteams from './pages/Subteams';
import Projects from './pages/Projects';
import Competitions from './pages/Competitions';
import JoinUs from './pages/JoinUs';
import Sponsors from './pages/Sponsors';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'subteams':
        return <Subteams />;
      case 'projects':
        return <Projects />;
      case 'competitions':
        return <Competitions />;
      case 'join':
        return <JoinUs />;
      case 'sponsors':
        return <Sponsors />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
