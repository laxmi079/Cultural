import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GalleryApp from "./components/GalleryApp";
import Events from "./components/events/events";

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Story />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryApp />} />
          <Route path="/clubs" element={<div>Clubs Page</div>} />
          <Route path="/teams" element={<div>Teams Page</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
