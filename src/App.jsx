import { About } from "./About";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
