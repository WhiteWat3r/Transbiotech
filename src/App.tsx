import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/sections/Header";
import useIsMobile from "./hooks/usIsMobile";
import { Home } from "./pages/Home";
import { Technologies } from "./pages/Technologies";
import ScrollToTop from "./hooks/ScrollToTop";
import { Perfusion } from "./pages/Perfusion";
import { CardiacSurgery } from "./pages/CardiacSurgery";
import { EmergencyMedicalServices } from "./pages/EmergencyMedicalServices";
import { Arrhythmology } from "./pages/Arrhythmology";
import { Footer } from "./components/sections/Footer";
import { MobileHeader } from "./components/sections/MobileHeader";

function App() {
  const breakpoint = useIsMobile();
  console.log("breakpoint", breakpoint);

  return (
    <Router>
      <ScrollToTop />
      {breakpoint !== "desktop" ? <MobileHeader /> : <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/perfusion" element={<Perfusion />} />
          <Route path="/cardiac-surgery" element={<CardiacSurgery />} />
          <Route path="/arrhythmology" element={<Arrhythmology />} />
          <Route path="/ems" element={<EmergencyMedicalServices />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
