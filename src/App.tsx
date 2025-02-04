import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/header/Header";
import { MobileHeader } from "./components/layout/header/MobileHeader";
import ScrollToTop from "./hooks/ScrollToTop";
import useBreakpoint from "./hooks/useBreakpoint";
import { useIsScrolled } from "./hooks/useIsScrolled";
import { Arrhythmology } from "./pages/Arrhythmology";
import { CardiacSurgery } from "./pages/CardiacSurgery";
import { Contacts } from "./pages/Contacts";
import { EmergencyMedicalServices } from "./pages/EmergencyMedicalServices";
import { Home } from "./pages/Home";
import { InProgress } from "./pages/InProgress";
import { Perfusion } from "./pages/Perfusion";
import { Products } from "./pages/Products";
import { Technologies } from "./pages/Technologies";

function App() {
  const { isDesktop } = useBreakpoint();

  return (
    <Router>
      <ScrollToTop />
      {isDesktop ? <Header /> : <MobileHeader />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/perfusion" element={<Perfusion />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cardiac-surgery" element={<CardiacSurgery />} />
          <Route path="/arrhythmology" element={<Arrhythmology />} />
          <Route path="/ems" element={<EmergencyMedicalServices />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="/in-progress" element={<InProgress />} />
          <Route path="*" element={<InProgress />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
