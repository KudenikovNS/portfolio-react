import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/logo/Logo";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ScrollToTop from "./utils/scrollToTop";
import BlobMenu from "./components/blobMenu/BlobMenu";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='App'>
      <Router basename="/portfolio-react">
        <ScrollToTop />
        <Logo />
        {windowWidth > 600 && <BlobMenu />}
        <Routes>
          <Route path='/' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
