import { Workexperience } from "./Workexperience";
import { Experience } from "./Experience";
import { Navbar } from "./Navbar";

export function About() {
  return (
    <div className="about">
      <Navbar />

      <div className="aboutline1">
        <div className="infos">
          <h6 id="dontbe">PERSONAL INFOS</h6>
          <div className="infos1">
            <p>
              <span id="infohead">NAME:</span> VIJAY KUMAR
            </p>
            <p>
              <span id="infohead">AGE:</span> 25 YEARS OLD
            </p>
            <p>
              <span id="infohead">FREELANCE:</span>{" "}
              <span id="infos2">AVAILABLE</span>
            </p>
            <p>
              <span id="infohead">LANGUAGES:</span> TAMIL, ENGLISH
            </p>
            <p>
              <span id="infohead">PHONE:</span> 7010993660
            </p>
            <p>
              <span id="infohead">MAIL ID:</span> VIJAYSACHINVIJ23@GMAIL.COM
            </p>
          </div>
          <a download href="./images/VIJAY.pdf">
            <button id="cv">
              DOWNLOAD CV <span id="downarrow">↓</span>
            </button>
          </a>
        </div>
        <div>
          <Workexperience />
        </div>
      </div>

      <div className="line"></div>
      <Experience />
    </div>
  );
}
