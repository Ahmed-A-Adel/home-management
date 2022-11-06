import React, { useState } from "react";
import "./Styles/LoginPopup.css";
function LoginPopup({ data, setData }) {
  // ________ Varibales ________________________
  const [balance, setbalance] = useState("");
  const [name, setname] = useState("");
  // ________ Varibales ________________________
  // ________ Functions ________________________
  const handleClick = (e) => {
    e.preventDefault();
    // ___________________________________________________
    if (name === "" || balance === "") return null;
    // ___________________________________________________
    if (!Number(balance) || balance.length < 3) return null;
    // ___________________________________________________
    setData({ ...data, user: { name, balance, login: false } });
  };
  // ________ Functions ________________________

  return (
    data.user.login && (
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
            <label htmlFor="balance">balance</label>
            <input
              type="text"
              name="balance"
              id="balance"
              value={balance}
              onChange={(e) => setbalance(e.target.value)}
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
