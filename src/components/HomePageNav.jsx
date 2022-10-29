import React from "react";
import { Link } from "react-router-dom";

function HomePageNav(props) {
  const style = {
    backgroundColor: "whitesmoke",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3rem",
  };
  return (
    <nav style={style}>
      <Link className="balance_link" style={{ textTransform: "capitalize" }}>
        your balance is : <span style={{ color: "green" }}>5000</span>
      </Link>
      <h4>State House Mangement</h4>
    </nav>
  );
}

export default HomePageNav;
