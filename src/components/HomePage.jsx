import React, { useState } from "react";
import HomePageNav from "./HomePageNav";
import LoginPopup from "./LoginPopup";
import { Link, Outlet } from "react-router-dom";
function HomePage() {
  // _________ Varibales ___________________________________
  const mainPadding = "3rem";
  const [data, setData] = useState({ popup: true });
  const [title, setTitle] = useState("");
  const [money, setMoney] = useState("");
  const [state, setState] = useState([{ title: "title", money: "300" }]);
  const [addPlane, setAddPlane] = useState(true);
  // _________ End Of Varibales ____________________________

  // _________  Functions  _____________________________________________
  const handleSubmit = (e) => {
    e.preventDefault();
    // ---------------------------------------------------
    if (title === "" || money === "") return null;
    // ---------------------------------------------------
    if (!Number(money)) return null;
    // ---------------------------------------------------
    setMoney("");
    setTitle("");
    // ---------------------------------------------------
    setState([...state, { title, money }]);
    setAddPlane(true);
    // ---------------------------------------------------
  };
  // __________________________________________________________
  const toggleAddPalne = () => setAddPlane(!addPlane);

  // _________ End Of Functions  _________________________________________

  return (
    <section
      className="home-page"
      style={{
        minHeight: "100vh",
      }}
    >
      <LoginPopup visible={data.popup} setData={setData} />
      <HomePageNav balance={data.salary} user={data.name} />
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
        <article
          className="add-plane"
          style={{
            background: "green",
            height: "15rem",

            minHeight: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link
            onClick={toggleAddPalne}
            className="add-plane_balance"
            style={{
              fontSize: addPlane ? "6rem" : "1rem",
              color: "white",
              backgroundColor: "transparent",
              textDecoration: "none",
            }}
          >
            {addPlane ? "+" : "go Back"}
          </Link>

          {!addPlane && (
            <form onSubmit={handleSubmit}>
              <div className="login-popup_form_container">
                <label htmlFor={"title"}>{"title"}</label>
                <input
                  type="text"
                  name={"title"}
                  id={"title"}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="login-popup_form_container">
                <label htmlFor={"money"}>{"money"}</label>
                <input
                  type="text"
                  name={"money"}
                  id={"money"}
                  value={money}
                  onChange={(e) => setMoney(e.target.value)}
                />
              </div>

              <button type="submit" onClick={handleSubmit}>
                add one
              </button>
            </form>
          )}
        </article>
        {state &&
          state.map((plane, i) => (
            <article
              className="add-plane"
              key={plane.title + i}
              style={{
                background: "green",
                height: "15rem",

                minHeight: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <h3>{plane.title}</h3>
              <span> {plane.money}</span>
            </article>
          ))}
      </main>
    </section>
  );
}

export default HomePage;
