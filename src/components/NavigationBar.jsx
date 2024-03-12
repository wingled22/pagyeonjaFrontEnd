import "../assets/css/NavigationBar.css";
import HitchLogo from "../assets/img/logo.svg";
import CurrentPage from "../assets/img/CurrentPageArrow.svg";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBicycle,
  faPerson,
  faCertificate,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
const NavigationBar = () => {
  const arrow = useRef();
  const [position, setPosition] = useState("6.5rem");
  const SetCurrentPosition = (target, position) => {
    // const position = arrow.current.getBoundingClientRect();

    setPosition(position);
  };

  return (
    <>
      <img
        src={CurrentPage}
        ref={arrow}
        alt="arrow"
        style={{
          position: "absolute",
          top: position,
          bottom: 0,
          width: 49.6,
          left: -6.5,
        }}
        className="arrow"
      />
      <div className="navigation-bar d-flex flex-column align-items-center">
        <img src={HitchLogo} alt="mylogo" className="mt-4" />
        <div className="d-flex flex-column align-items-center mt-4">
          <Icon
            icon={faHouse}
            color="white"
            className="large-icon"
            onClick={() => SetCurrentPosition("home", "6.5rem")}
          />
          <Icon
            icon={faBicycle}
            color="white"
            className="large-icon"
            onClick={() => SetCurrentPosition("rider", "12rem")}
          />
          <Icon
            icon={faPerson}
            color="white"
            className="large-icon"
            onClick={() => SetCurrentPosition("rider", "17rem")}
          />
          <Icon
            icon={faCertificate}
            color="white"
            className="large-icon"
            onClick={() => SetCurrentPosition("rider", "22.25rem")}
          />
        </div>
        <div className="logout">
          <Icon icon={faPowerOff} color="#e38071" className="logout-btn mb-4" />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
