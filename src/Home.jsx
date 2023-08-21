import { Link } from "react-router-dom";
import { Sociallinks } from "./Sociallinks";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";
import { Form } from "./Form";

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

      <div id="home-skill">
        <div className="line"></div>

        <h2 id="getin-touch">
          SKILS & <span id="touch"> TOOLS</span>
        </h2>
        <p className="para1">
          I possess a diverse skill set in web development and design, with
          proficiency in
          <span id="para-skillline"> HTML, JavaScript, ReactJS, and CSS.</span>
          Leveraging these skills, I have the capability to create dynamic and
          interactive web applications that deliver seamless user experiences.
          <span id="para-skillline">
            {" "}
            My familiarity with ReactJS empowers me to build modern and
            efficient user interfaces,
          </span>
          enhancing the overall functionality of web projects.
        </p>
        <Skills />
      </div>
      <div className="home-contact">
        <div className="line"></div>
        <h2 id="getin-touch">
          HIRE <span id="touch"> ME</span>
        </h2>
        <div id="contact-div">
          <div>
            <p id="home-contact-para">
              Looking to enhance{" "}
              <span id="contact-para1">
                your team with a skilled and dedicated frontend developer? Look
                no further!
              </span>{" "}
              With a passion for crafting seamless user experiences and a strong
              command of{" "}
              <span id="contact-para1">
                HTML, CSS, JavaScript, and ReactJs.{" "}
              </span>
              I bring a creative and detail-oriented approach to frontend
              development. I thrive in transforming design concepts into
              responsive, user-friendly interfaces that captivate users. Let's
              collaborate to create visually stunning and highly functional web
              applications that leave a lasting impression.
            </p>
            <Sociallinks />
          </div>

          <div className="home-form">
            <Form />
          </div>
        </div>
      </div>
      <p id="rights">© 2022-2023 Vijay Kumar K. All rights reserved.</p>
    </div>
  );
}
