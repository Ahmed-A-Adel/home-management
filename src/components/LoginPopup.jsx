import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/LoginPopup.css";
function LoginPopup() {
  const [salary, setsalary] = useState("");
  const [name, setname] = useState("");
  return (
    <div className="login-popup">
      <div className="login-popup_form">
        <div className="login-popup_form_container">
          <label htmlFor="name">full name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="login-popup_form_container">
          <label htmlFor="salary">salary</label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={salary}
            onChange={(e) => setsalary(e.target.value)}
          />
        </div>
        <Link>start plaining</Link>
      </div>
    </div>
  );
}

export default LoginPopup;
