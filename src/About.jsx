import { Workexperience } from "./Workexperience";

export function About() {
  return (
    <div className="about">
      <h2 id="getin-touch">
        ABOUT <span id="touch">ME</span>
      </h2>
      <h6 id="dontbe">PERSONAL INFOS</h6>
      <div className="infos">
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
      <button id="cv">
        DOWNLOAD CV <span id="downarrow">↓</span>
      </button>
      <div>
        <Workexperience />
        {/* <p>
          3<sup>+</sup>
        </p>
        <p>— YEARS OF</p>
        <p>EXPERIENCE</p>
        <p>
          10<sup>+</sup>
        </p>
        <p>— COMPLETED</p>
        <p>PROJECTS</p>
        <p>
          5<sup>+</sup>
        </p>
        <p>— HAPPY</p>
        <p>CLIENTS</p>
        <p>
          12<sup>+</sup>
        </p>
        <p>— CERTIFICATE</p>
        <p>WON</p> */}
      </div>
    </div>
  );
}
