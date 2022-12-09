import logo from './logo.svg';
import './App.css';

import Header from './header';
import Footer from './footer';
import IntroSection from './components/IntroSection';
import ContactShortCut from './components/ContactShortcut';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <ContactShortCut />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
