import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Intro from "./components/Intro";
import MainLayout from "./layout/MainLayout";
import ChatBot from "./components/ChatBot"; // ✅ Added

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Technical from "./pages/Technical";
import NonTechnical from "./pages/NonTechnical";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

/* 🔵 Technical Pages */
import BorderlandDecrypt from "./pages/technical/BorderlandDecrypt";
import ComicNexus from "./pages/technical/ComicNexus";
import Hacsprint from "./pages/technical/Hacsprint";
import ThinkLink from "./pages/technical/ThinkLink";
import DriftX from "./pages/technical/DriftX";

/* 🔴 Non Technical Pages */
import CricketConquest from "./pages/nontechnical/CricketConquest";
import HeistHorizon from "./pages/nontechnical/HeistHorizon";
import RhythmRiot from "./pages/nontechnical/RhythmRiot";
import StrangerThings from "./pages/nontechnical/StrangerThings";
import MinToWinIt from "./pages/nontechnical/MinToWinIt";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // ✅ Intro Screen
  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <>
      <MainLayout>
        <Routes>
          {/* 🌍 Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/non-technical" element={<NonTechnical />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />

          {/* 🔵 Technical Event Pages */}
          <Route path="/technical/borderland-decrypt" element={<BorderlandDecrypt />} />
          <Route path="/technical/comic-nexus" element={<ComicNexus />} />
          <Route path="/technical/hacsprint" element={<Hacsprint />} />
          <Route path="/technical/think-link" element={<ThinkLink />} />
          <Route path="/technical/drift-x" element={<DriftX />} />

          {/* 🔴 Non-Technical Event Pages */}
          <Route path="/non-technical/cricket-conquest" element={<CricketConquest />} />
          <Route path="/non-technical/heist-horizon" element={<HeistHorizon />} />
          <Route path="/non-technical/rhythm-riot" element={<RhythmRiot />} />
          <Route path="/non-technical/stranger-things" element={<StrangerThings />} />
          <Route path="/non-technical/min-to-win-it" element={<MinToWinIt />} />
        </Routes>
      </MainLayout>

      {/* ✅ ChatBot appears on all pages after Intro */}
      <ChatBot />
    </>
  );
}

export default App;