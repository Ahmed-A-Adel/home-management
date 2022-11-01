import React from "react";
import { Link } from "react-router-dom";

function HomePageNav({ balance, user }) {
  const style = {
    backgroundColor: "whitesmoke",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3rem",
    textTransform: "capitalize",
  };
  return (
    user && (
      <nav style={style}>
        <Link className="balance_link" style={{ textTransform: "capitalize" }}>
          your balance is : <span style={{ color: "green" }}>{balance}</span>
        </Link>
        <h4>{user}</h4>
      </nav>
    )
  );
}

export default HomePageNav;
