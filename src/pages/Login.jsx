import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Spinner, Alert, Row, Col } from "react-bootstrap";
import "../styles/Login.css";
import Header from "../components/Header";
import { loginReq } from "../redux/action/index";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const LoginData = useSelector((state) => state.LoginReducerstatus);
  const [username, usernameUpdate] = useState("");
  const [password, passwordUpdate] = useState("");
  const [err, errUpdate] = useState("");

  useEffect(() => {
    if (LoginData.isLogin) {
      history.push("/polllist");
    }
    LoginData.response ? errUpdate(LoginData.response.data) : errUpdate("");
  }, [LoginData]);
  const formDataHandler = () => {
    const formData = { username, password };
    dispatch(loginReq(formData));
  };
  console.log(process.env);
  return (
    <>
      {LoginData.isLoading ? (
        <Spinner animation="border" variant="info" className="Spinner" />
      ) : (
        <div className="Login">
          <Header heading="LOGIN" />
          <Form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              formDataHandler();
            }}
          >
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm="2">
                {" "}
                Username{" "}
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="email"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => {
                    usernameUpdate(event.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <br />
            {err ? <Alert variant="danger"> {err} </Alert> : ""}
            <Form.Group as={Row} controlId="formBasicPassword">
              <Form.Label column sm="2">
                {" "}
                Password{" "}
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="email"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    passwordUpdate(event.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              {" "}
              LOGIN{" "}
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};
export default Login;
