import React, { useState } from "react";
import "./Styles/LoginPopup.css";
function LoginPopup({ visible, setData }) {
  // ________ Varibales ________________________
  const [salary, setsalary] = useState("");
  const [name, setname] = useState("");
  // ________ Varibales ________________________
  // ________ Functions ________________________
  const handleClick = (e) => {
    e.preventDefault();
    // ___________________________________________________
    if (name === "" || salary === "") return null;
    // ___________________________________________________
    if (!Number(salary) || salary.length < 3) return null;
    // ___________________________________________________
    setData({ name, salary, popup: false });
  };
  // ________ Functions ________________________

  return (
    visible && (
      <div className="login-popup">
        <form className="login-popup_form" onSubmit={handleClick}>
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
          <button type="submit" onClick={handleClick}>
            start planing
          </button>
        </form>
      </div>
    )
  );
}

export default LoginPopup;
