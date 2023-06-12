import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logo from "./components/logo/Logo";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Logo />
        <Routes>
          <Route path='/portfolio-react' element={<Projects />} />
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
