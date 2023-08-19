import { About } from "./About";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Form } from "./Form";
import { Sociallinks } from "./Sociallinks";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sociallink" element={<Sociallinks />} />
      </Routes>
    </div>
  );
}

export default App;
