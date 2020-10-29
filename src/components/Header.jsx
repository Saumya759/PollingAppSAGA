import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Login from "./Login";
import Logout from "./Logout";

const Header = ({ heading }) => {
  return (
    <>
      <div className="template">
        <Container>
          <Row>
            <Col xs={6}>
              <b>POLLING APP</b>
            </Col>
            <Col xs={6}>
              <Row>
              <Col xs={6} md={4}>
                  <Login />
                </Col>
                <Col xs={6} md={4}>
                  <Link to="/signup" className="link-header">
                    {" "}
                    <Button
                      className="button"
                      as="input"
                      type="submit"
                      value="SIGNUP"
                    />{" "}
                  </Link>
                </Col>
                <Col xs={6} md={4}>
                  <Logout/>
                  </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
