import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { MobileHeader } from "./components/sections/MobileHeader";
import ScrollToTop from "./hooks/ScrollToTop";
import useIsMobile from "./hooks/useIsMobile";
import { Arrhythmology } from "./pages/Arrhythmology";
import { CardiacSurgery } from "./pages/CardiacSurgery";
import { EmergencyMedicalServices } from "./pages/EmergencyMedicalServices";
import { Home } from "./pages/Home";
import { Perfusion } from "./pages/Perfusion";
import { Technologies } from "./pages/Technologies";
import { Products } from "./pages/Products";

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
          <Route path="/products" element={<Products />} />
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
