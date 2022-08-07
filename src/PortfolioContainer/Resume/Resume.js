import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const  Resume = (props) => {
    // the states
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  // create date if there is a date
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>  
    );
  };
  // static resume data fot the lables
  const resumBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  // my skilss
  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React Js", ratingPercentage: 70 },
    { skill: "PHP OOP", ratingPercentage: 75 },
    { skill: "Laravel", ratingPercentage: 75 },
    { skill: "sql", ratingPercentage: 80 },
    { skill: "MYSQL", ratingPercentage: 75 },
    { skill: "Bootstrap", ratingPercentage: 85 },
    { skill: "CSS, Sass", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Porfolio website to showcase all my details and projects in one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Blog Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A blog website where users can create there one stories and update them",
      subHeading: "Technologies Used: PHP,Laravel and thailwind",
    },
    {
      title: "E Commerce Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A E commerce website created at campus in gent for showcase my skills",
      subHeading: "Technologies Used: PHP,Laravel and thailwind",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Becode Bootcamp, Gent"}
        subHeading={"Junior Full Stack Web Developer"}
        fromDate={"2022"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Angela Yu Udemy course, Remote"}
        subHeading={"Junior Full Stack Web Developer"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"SoloLearn, Remote"}
        subHeading={"HTML, CSS, JavaScript and PHP"}
        fromDate={"2022"}
        toDate={"2022"}
      />
    </div>,
    // work experiences
    <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
      <ResumeHeading
        heading={"hello"}
        subHeading={"hello"}
        fromDate={"2022"}
        toDate={"2022"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          No work experience available for now!
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - No work experience available for now!
        </span>
        <br />
        <span className="resume-description-text">
          - No work experience available for now!
        </span>
        <br />
        <span className="resume-description-text">
          - No work experience available for now!
        </span>
        <br/>
      </div>
      </div>
      </div>,
      // programming skills.
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-precentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>,
      // projects 
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subheading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>,

      // interests 
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Learning"
          description="I love learning new things in live. it makes me feel that i'm moving forward."
        />
        <ResumeHeading
          heading="Swimming and Yoga"
          description="These are the sports that keeps me healty and feel fit."
        />
        <ResumeHeading
          heading="Traveling"
          description="Seeing the world in different countries makes me value other cultures."
        />
      </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
