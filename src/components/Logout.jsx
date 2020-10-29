import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { Button } from "react-bootstrap";

const Login = () => {
  const clear = () => {
    localStorage.clear();
  };

  return (
    <>
      <Link to="/" className="link-header">
        {" "}
        <Button
          onClick={clear}
          className="button"
          as="input"
          type="submit"
          value="LOGOUT"
        />{" "}
      </Link>
    </>
  );
};
export default Login;
