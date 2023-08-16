import { Link } from "react-router-dom";
import { Sociallinks } from "./Sociallinks";
import { Navbar } from "./Navbar";

export function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="spec">
        <img className="VIJAY" alt="Vijay" src="./images/vijayk.png" />
        <div className="nameline">
          <h3 id="name">— I'M VIJAY KUMAR.</h3>
          <h5 id="line2">WEB DEVELOPER</h5>
          <p className="para">
            I’m Chennai Based Full Stack Developer & Digital Marketer And
            Designer Focused on Crafting clean & User‑Friendly Experiences, I’m
            Passionate about Building Excellent Web Development.
          </p>
          <div className="social">
            <Link to="/about" id="morelink">
              <p id="more-about">
                MORE ABOUT ME <span id="arrow">→</span>
              </p>
            </Link>
            <Sociallinks />
          </div>
        </div>
      </div>
    </div>
  );
}
