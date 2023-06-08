import React, { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  let currentScreenSubscription = ScrollService.cureentScreenBroadCaster.subscribe(updateCurrentScreen)

  const getHeaderOption = () => {
    return( TOTAL_SCREENS.map((screen, i) => ( 
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}>
        <span>{screen.screen_name}</span>
      </div>
    ))    
    ) 
}

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1) 
    classes += "header-option-seperator";

    if (selectedScreen === index) 
    classes += "selected-header-option";
    return
  }

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name)
    if (!screenComponent) 
    return;

    screenComponent.scrollIntoView({ behavior: "smooth" })
    setSelectedScreen(index)
    setShowHeaderOptions(false);
  };

  return (
    <div>
      <div
        className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
        <div className="header-parent">
          <div className="header-hamburger"onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
              <FontAwesomeIcon className="header_hamburger-bars" icon={faBars}/>
            </div>
        <div className="header-logo">
            <span>Samer</span>
        </div>
        <div className={(showHeaderOptions)? "header-optons show-hamburger-options": "heaer-options"}>
            {getHeaderOption()}
        </div>
        </div>
      </div>
    </div>
  );
}