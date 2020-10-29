import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { Button } from "react-bootstrap";
const Login = () => {
  return (
    <>
      <Link to="/login" className="link-header">
        {" "}
        <Button
          className="button"
          as="input"
          type="submit"
          value="LOGIN"
        />{" "}
      </Link>
    </>
  );
};
export default Login;
