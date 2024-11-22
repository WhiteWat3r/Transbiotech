import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MobileHeader } from "./components/MobileHeader";
import useIsMobile from "./hooks/usIsMobile";
import { Home } from "./pages/Home";
import { Technologies } from "./pages/Technologies";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  const breakpoint = useIsMobile();
  console.log("breakpoint", breakpoint);

  return (
    <Router>
      {breakpoint !== "desktop" ? <MobileHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
