import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MobileHeader } from "./components/MobileHeader";
import useIsMobile from "./hooks/usIsMobile";
import { Home } from "./pages/Home";

function App() {
  const breakpoint = useIsMobile();
  console.log("breakpoint", breakpoint);

  return (
    <>
      {breakpoint !== "desktop" ? <MobileHeader /> : <Header />}
      <Home />
      <Footer />
    </>
  );
}

export default App;
