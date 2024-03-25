import "../assets/css/NavigationBar.css";
import HitchLogo from "../assets/img/logo.svg";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faHouse,
  faBicycle,
  faPerson,
  faCertificate,
  faPowerOff,
  faPersonCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <>
      <div className="navigation-bar d-flex flex-column align-items-center">
        <img src={HitchLogo} alt="mylogo" className="mt-4 logo" />
        <div className="d-flex flex-column align-items-center mt-4">
          <NavLink className="nav-link" to={"/home"}>
            <Icon icon={faHouse} color="white" className="large-icon" />
          </NavLink>
          <NavLink className="nav-link" to={"/rider"}>
            <Icon icon={faBicycle} color="white" className="large-icon" />
          </NavLink>
          <NavLink className="nav-link" to={"/commuter"}>
            <Icon icon={faPerson} color="white" className="large-icon" />
          </NavLink>

          <NavLink className="nav-link" to={"/rider-approval"}>
            <Icon icon={faCertificate} color="white" className="large-icon" />
          </NavLink>

          <NavLink className="nav-link" to={"/commuter-approval"}>
            <Icon
              icon={faPersonCircleCheck}
              color="white"
              className="large-icon"
            />
          </NavLink>
        </div>
        <div className="logout">
          <Icon icon={faPowerOff} color="#e38071" className="logout-btn mb-4" />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
