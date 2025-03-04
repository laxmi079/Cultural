import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import About from "./components/About";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GalleryApp from "./components/GalleryApp";
import Events from "./components/events/events";
import Teams from "./components/teams/Teams";
import Clubs from "./components/clubs/Clubs";
import { Wmc } from "./components/clubs/wmc/wmc";
import { Masq } from "./components/clubs/masq/masq";
import { Lit } from "./components/clubs/lit/lit";
import { Quiz } from "./components/clubs/quiz/quiz";
import Aavran from "./components/clubs/aavran/aavran";
import { Imc } from "./components/clubs/imc/Imc";
import { Dfz } from "./components/clubs/dfz/dfz";
import { Fac } from "./components/clubs/fac/fac";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load only Hero component
const Hero = lazy(() => import('./components/Hero'));

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Hero />
              <Features />
              <Story />
            </Suspense>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryApp />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/wmc" element={<Wmc />} />
          <Route path="/clubs/masq" element={<Masq />} />
          <Route path="/clubs/lit" element={<Lit />} />
          <Route path="/clubs/quiz" element={<Quiz />} />
          <Route path="/clubs/aavran" element={<Aavran />} />
          <Route path="/clubs/imc" element={<Imc />} />
          <Route path="/clubs/dfz" element={<Dfz />} />
          <Route path="/clubs/fac" element={<Fac />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
