import { Sociallinks } from "./Sociallinks";
import { Form } from "./Form";
import { Navbar } from "./Navbar";

export function Contact() {
  return (
    <>
      <div className="contact">
        <Navbar />
        {/* <h2 id="getin-touch">
          GET IN <span id="touch">TOUCH</span>
        </h2> */}
        <div className="container">
          <div>
            <h6 id="dontbe"> DON'T BE SHY !</h6>
            <p id="para">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions
            </p>
            <img id="img" src="./images/location.png" alt="address" />
            <p id="address">ADDRESS PONIT</p>
            <p id="address-line">
              5/B1, Mettu Street, Velachery, Chennai 600042
            </p>
            <img id="img" src="./images/mail-logo.png" alt="mail" />
            <p id="address">MAIL ME</p>
            <p id="address-line">Vijaysachinvij23@gmail.com</p>
            <img id="img" src="./images/phone.png" alt="phonenumber" />
            <p id="address">CALL ME</p>
            <p id="address-line">+91 701 099 3660</p>
          </div>
          <Form id="form1" />
        </div>
        <p id="sociallink2">
          <Sociallinks />
        </p>
      </div>
    </>
  );
}
