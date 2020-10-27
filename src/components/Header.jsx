import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ heading }) => {
  return (
    <p style={headerClass}>
      <Container>
        <Row>
          <Col xs={6}>
            <b>POLLING APP</b>
          </Col>
          <Col xs={6}>
            <Row md={4}>
              <Col>
                <Link to="/login" className="link-header">
                  {" "}
                  <u>LOGIN</u>{" "}
                </Link>
              </Col>
              <Col xs={6}>
                <Link to="/signup" className="link-header">
                  {" "}
                  <u>SIGNUP</u>{" "}
                </Link>
              </Col>
              <Col>
                <Link to="/signup" className="link-header">
                  {" "}
                  <u >LOGOUT</u>{" "}
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </p>
  );
};
const headerClass = {
  background: "pink",
  padding: "1%",
  fontSize: "1.5rem",
  marginTop: 0,
};
export default Header;
