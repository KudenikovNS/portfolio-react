import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/portfolio-react' element={<Projects />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
