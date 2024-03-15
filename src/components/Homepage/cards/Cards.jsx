import React from "react";
import CardItem from "./CardItem.jsx";
import "../../../assets/css/Card.css";
import { Row, Col } from "reactstrap";

const Cards = () => {
  return (
    <>
      <Row>
        <Col className="mb-lg-2 mb-md-3" xl={3} lg={3} md={6} sm={10}>
          <CardItem
            cardIcon={"bicycle"}
            text={"Total Riders"}
            numericText={"2.5k"}
          />
        </Col>
        <Col className="mb-lg-2 mb-md-3" xl={3} lg={3} md={6} sm={10}>
          <CardItem
            cardIcon={"user"}
            text={"Monthly Commuters"}
            numericText={"12k"}
          />
        </Col>
        <Col className="mb-lg-2 mb-md-3" xl={3} lg={3} md={6} sm={10}>
          <CardItem
            cardIcon={"money"}
            text={"Monthly Revenue"}
            numericText={"125k"}
          />
        </Col>
        <Col className="mb-lg-2 mb-md-3" xl={3} lg={3} md={6} sm={10}>
          <CardItem
            cardIcon={"certificate"}
            text={"Monthly verified"}
            numericText={"1.2k"}
          />
        </Col>
      </Row>
    </>
  );
};

export default Cards;
