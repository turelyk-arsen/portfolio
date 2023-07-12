import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

import ScrollToTop from "./util/scrollToTop"
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
