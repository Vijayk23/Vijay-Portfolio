import { Link } from "react-router-dom";

export function Sociallinks() {
  return (
    <div id="socialmedia-link">
      <Link to="https://www.linkedin.com/in/vijayk23/" target="_blank">
        <img id="img1" src="./images/linkedin-logo.png" alt="linkedin" />
      </Link>
      <Link to="https://github.com/Vijayk23" target="_blank">
        <img id="img2" src="./images/github-logo.png" alt="github" />
      </Link>
      <Link
        to="https://www.facebook.com/profile.php?id=100047753657999"
        target="_blank"
      >
        <img id="img3" src="./images/facebook-logo.png" alt="facebook" />
      </Link>
      <Link to="mailto:vijaysachinvij23@gmail.com" target="_blank">
        <img id="img2" src="./images/mail-logo.png" alt="mail" />
      </Link>
    </div>
  );
}
