import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animatios";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return( <div className="resume-heading">
    <div className="resume-main-heading">
      <div className="heading-bullet">
        <span>{props.heading ? props.heading : ""}</span>
        {props.fromDate && props.toDate ? (
          <div className="heading-date">
            {props.fromDate + "_" + props.toDate}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="resume-sub-heading">
        <span>{props.sunHeading ? props.subHeading : ""}</span>
      </div>
      <div className="resume-heading-description">
        <span>{props.description ? props.description : ""}</span>
      </div>
    </div>
  </div>)
   
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Express JS", ratingPercentage: 65 },
    { skill: "Node JS", ratingPercentage: 75 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "C#", ratingPercentage: 85 },
    { skill: ".NET FrameWork", ratingPercentage: 75 },
    { skill: "Java", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "Ecommerce Store",
      duration: { fromDate: "2023", toDate: "ongoing" },
      description:
        "Seamless and comprehensive buy-and-sell journey, enriched by a diverse range of products",
      subHeading: "Technologies Used : .NET with MVC architecture",
    },
    {
      title: "Portfolio-Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "Build a portfolio website to professionally present myself",
      subHeading: "Technologies Used : React JS and Node JS",
    },
    {
      title: "Online Platform Offering Free Courses",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        " Knowledge exchange project through online courses, enabling users to both create and take courses on various subjects",
      subHeading: "Technologies Used : Mongo DB, Express JS, React JS, Node JS",
    },

    {
      title: "CV-WebSite",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Build a dynamic website for managing CVs that includes a profile page featuring the actual CV, for professional presentation",
      subHeading: "Technologies Used : .NET with MVC architecture",
    },

    {
      title: "Portfolio-Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Build a basic portfolio website that presents multiple individuals simultaneously",
      subHeading: "Technologies Used : HTML, CSS and JS",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Örebro University - Sweden"}
        subHeading={"Systems Sciences"}
        fromDate={"2020"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Aleppo University - Syria"}
        subHeading={"Arabic literature"}
        fromDate={"2012"}
        toDate={"2015"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Home Practice"}
        subHeading={"FULL STACK DEVELOPMENT"}
        fromDate={"2023"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Developing myself and practicing through a variety of personal
          projects
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-procentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-precentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>{" "}
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Sports"
          description="I have a particular fondness for watching football,
 with a special emphasis on the Spanish La Liga and the English Premier League."
          description2="Stay in shape and maintain a good level of fitness by regularly going to the gym"
        />
        <ResumeHeading
          heading="Teaching"
          description="Delving into a diverse range of concise coding tutorial courses at random, with the aim of refreshing my mind"
        />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

const getResumeScreen = () => {

    return(
        <div style={carousalOffSetStyle.style} 
         className="resume-details-carousal">
          
          {resumeDetails.map((ResumeDetail)=> ResumeDetail)}

        </div>
    )
}
const getBullets = () =>{

    return resumeBullets.map((bullet,index)=>(

        <div onClick={()=> handleCarousal(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} 
        key={index}>
            <img src={require(`../../assets/Resume/${bullet.logoSrc}`)} className="bullet-logo" alt="Something went wrong !" />
        </div> 
    ))
}




  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
     
        <ScreenHeading
          title={"Resume"}
          subHeading={"Personal Profile Details"}/>

<div className="resume-card">
    <div className="resume-bullets">
        <div className="bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">{getBullets()}</div>
        </div>
    </div>

<div className="resume-bullet-details">{getResumeScreen()}</div>


</div>
      </div>
    </div>
  );
}
