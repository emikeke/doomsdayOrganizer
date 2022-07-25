import { Link } from "react-router-dom";
import React from "react";

const Error = () => {
  return (
    <div className="error-text">
      <h1>Hi, the page you have requested is not found. Please go back to the <Link to="/">main page</Link>.</h1>
    </div>
  )
}

export default Error;