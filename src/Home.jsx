import { Link } from "react-router-dom";

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
              <Link to="/blog" className="nav-link">
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
            <Link to="/about">
              <p id="more-about">
                MORE ABOUT ME <span id="arrow">→</span>
              </p>
            </Link>
            <div id="socialmedia-link">
              <Link to="https://www.linkedin.com/in/vijayk23/" target="_blank">
                <img
                  id="img1"
                  src="./images/linkedin-logo.png"
                  alt="linkedin"
                />
              </Link>
              <Link to="https://github.com/Vijayk23" target="_blank">
                <img id="img2" src="./images/github-logo.png" alt="github" />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=100047753657999"
                target="_blank"
              >
                <img
                  id="img3"
                  src="./images/facebook-logo.png"
                  alt="facebook"
                />
              </Link>
              <Link to="mailto:vijaysachinvij23@gmail.com" target="_blank">
                <img id="img2" src="./images/mail-logo.png" alt="mail" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
