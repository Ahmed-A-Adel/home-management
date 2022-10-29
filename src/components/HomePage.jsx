import React from "react";
import HomePageNav from "./HomePageNav";
import { Link, Outlet } from "react-router-dom";
// import styles from "./Styles/HomePageStyles.js";
// import { makeStyles } from "@mui/material";
function HomePage() {
  const mainPadding = "3rem";
  const numberOfCoulmns = 9;
  const makeNumOfArrays = [...Array(numberOfCoulmns).keys()];
  return (
    <section
      className="home-page"
      style={{
        minHeight: "100vh",
        backgroundColor: "lightBlue",
      }}
    >
      <Outlet />
      <HomePageNav />
      <main
        className="main"
        style={{
          background: "white",
          padding: mainPadding,
          height: "90%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(15rem,1fr))",
          gap: ".5rem",
          alignItems: "flex-start",
        }}
      >
        {makeNumOfArrays.map((_, index) => (
          <article
            key={index}
            className="add-plane"
            style={{
              background: "black",
              height: "15rem",

              minHeight: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              className="add-plane_balance"
              style={{
                fontSize: "6rem",
                color: "white",
                backgroundColor: "transparent",
              }}
            >
              +
            </Link>
          </article>
        ))}
      </main>
    </section>
  );
}

export default HomePage;
