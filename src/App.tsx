import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MobileHeader } from "./components/MobileHeader";
import useIsMobile from "./hooks/usIsMobile";
import { Home } from "./pages/Home";
import { Technologies } from "./pages/Technologies";
import ScrollToTop from "./hooks/ScrollToTop";

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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
