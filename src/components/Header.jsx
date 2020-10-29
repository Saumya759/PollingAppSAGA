import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Login from "./Login";

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
              <Row md={4}>
                <Col>
                  <Login />
                </Col>
                <Col xs={6}>
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
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
