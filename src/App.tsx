import { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Subteams from './pages/Subteams';
import Projects from './pages/Projects';
import Competitions from './pages/Competitions';
import JoinUs from './pages/JoinUs';
import Sponsors from './pages/Sponsors';
import Structures from './pages/subteams/Structures';
import Avionics from './pages/subteams/Avionics';
import Recovery from './pages/subteams/Recovery';
import Payload from './pages/subteams/Payload';
import Propulsion from './pages/subteams/Propulsion';
import FlightDynamics from './pages/subteams/FlightDynamics';
import Srad from './pages/subteams/Srad';
import Business from './pages/subteams/Business';
import Graphics from './pages/subteams/Graphics';

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
        return <Subteams onNavigate={setCurrentPage} />;
      case 'projects':
        return <Projects />;
      case 'competitions':
        return <Competitions />;
      case 'join':
        return <JoinUs />;
      case 'sponsors':
        return <Sponsors />;
      case 'subteam-structures':
        return <Structures onNavigate={setCurrentPage} />;
      case 'subteam-avionics':
        return <Avionics onNavigate={setCurrentPage} />;
      case 'subteam-recovery':
        return <Recovery onNavigate={setCurrentPage} />;
      case 'subteam-payload':
        return <Payload onNavigate={setCurrentPage} />;
      case 'subteam-propulsion':
        return <Propulsion onNavigate={setCurrentPage} />;
      case 'subteam-flight-dynamics':
        return <FlightDynamics onNavigate={setCurrentPage} />;
      case 'subteam-srad':
        return <Srad onNavigate={setCurrentPage} />;
      case 'subteam-business':
        return <Business onNavigate={setCurrentPage} />;
      case 'subteam-graphics':
        return <Graphics onNavigate={setCurrentPage} />;
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
