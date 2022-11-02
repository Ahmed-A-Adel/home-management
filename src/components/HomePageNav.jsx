import React from "react";
import { Link } from "react-router-dom";

function HomePageNav({ user }) {
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
    user.name && (
      <nav style={style}>
        <Link className="balance_link" style={{ textTransform: "capitalize" }}>
          your balance is :{" "}
          <span style={{ color: "green" }}>{user.balance}</span>
        </Link>
        <h4>{user.name}</h4>
      </nav>
    )
  );
}

export default HomePageNav;
