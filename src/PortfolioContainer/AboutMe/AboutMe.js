import React from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animatios";
import "./AboutMe.css"; 

export default function AboutMe(props) {
let fadeInScreenHandler = (screen)=>{
    if (screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id) 
}

const fadeInSubcription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

const SCREEN_CONSTANTS =   {
    description: "As a highly skilled full-stack developer, proficiency in both front-end and back-end technologies is demonstrated, along with a strong ability to architect and deliver high-quality web applications."
    , highlights :{
          bullets : [ "MERN stack development",
        "MVC (Model-View-Controller) architecture", 
   ".NET framework proficiency",
 "SQL database management"] ,

 heading:"A few noteworthy aspects:"

    }
}

const renderHighlights= () => {
return (

SCREEN_CONSTANTS.highlights.bullets.map((value, i )=> (
<div className='highlight' key={i}>
<div className='highlight-blob'></div>

<span>{value}</span>
</div>

))

)

}


return(

    <div className='about-me-container screen-container ' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={'Why choose Me?'}/>
            <div className='about-me-card'>
                <div className='about-me-profile'></div>
                <div className='about-me-details'>
                    <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'>
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                        </div>
                        {renderHighlights()}
                    </div>
                    <div className='about-me-options'>
                    <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>{""} Hire Me {""} </button>
            <a href="CV.pdf" download="Samer's Resume">
              <button className="btn highlighted-btn">Get Resume</button>
              </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

}