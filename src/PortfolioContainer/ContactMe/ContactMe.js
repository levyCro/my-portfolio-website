import React, { useRef, useState } from "react";
import Typical from "react-typical";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

import imgBack from "../../../src/images/mailz.jpeg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const form = useRef();

  const [banner, setBanner] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name.length);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setBanner("Please fil in al the fields below!");
      toast.error("Please fil in al the fields below!");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setBanner("Thank U For Contacting Me.");
            toast.success("Thank U Email send Successfully?");
          },
          (error) => {
            console.log(error.text);
            setBanner("Please fil in al the fields below!");
            toast.error("Please fil in al the fields below!");
          }
        );
      e.target.reset();
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Get In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical loop={Infinity} steps={["Get In Touch ✉️", 1000]} />
          </h2>
          <a target="_blank" href="https://github.com/levyCro">
            <i className="fa fa-github-square"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/levy-crols-92677b189/"
          >
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleEmail}
              value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              onChange={handleMessage}
              value={message}
            />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <div className="footer-container">
        <footer>
          <small>
            &copy; <a href="/home">Levy Crols {new Date().getFullYear()}</a>
          </small>
        </footer>
      </div>
      <hr />
    </div>
  );
}
