import React from "react";
import "../../../assets/css/Cards.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faEllipsisV,
  faUser,
  faMoneyBill1,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "reactstrap";

const CardTotalRider = ({ cardIcon, text, numericText }) => {
  return (
    <>
      <Row className="shadow-sm rounded justify-content-center align-items-center p-2">
        <Row className="w-100">
          <Col className="text-left">
            <Icon
              icon={
                cardIcon === "bicycle"
                  ? faBicycle
                  : cardIcon === "user"
                  ? faUser
                  : cardIcon === "money"
                  ? faMoneyBill1
                  : faCertificate
              }
              className="card-icon fs-1"
            />
          </Col>
          <Col className="text-end">
            <Icon icon={faEllipsisV} className="menu" />
          </Col>
        </Row>
        <Row className="w-100">
          <h1 className="text-wrapper-Rider">{numericText}</h1>
        </Row>
        <Row className="w-100">
          <p>{text}</p>
        </Row>
      </Row>
    </>
  );
};

export default CardTotalRider;
