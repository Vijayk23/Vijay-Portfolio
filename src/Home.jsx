import { Link } from "react-router-dom";
import { Sociallinks } from "./Sociallinks";

export function Home() {
  return (
    <div className="Home">
      <nav>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link">
                ABOUT ME
              </Link>
            </li>

            <li>
              <Link to="/Form" className="nav-link">
                BLOG
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
