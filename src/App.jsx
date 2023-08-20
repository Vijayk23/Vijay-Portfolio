import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { About } from "./About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
