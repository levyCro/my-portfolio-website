import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>
          <div className="profile-detail-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Levy</span>
            </span>
          </div>
          <div className="profile-detail-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🔴",
                    1000,
                    "Junior Full Stack Developer 🖥️",
                    1000,
                    "MySQL Server Dev 😎",
                    1000,
                    "PHP Stack Dev 🌐",
                    1000,
                    "React/React Native Dev 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me</button>
            <a href="levycvtest.pdf" download="Levy levycvtest.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
