import React, { useState } from "react";
import HomePageNav from "./HomePageNav";
import LoginPopup from "./LoginPopup";
import AddPlane from "./AddPlane";
import { Link, Outlet } from "react-router-dom";
function HomePage() {
  // _________ Varibales ___________________________________
  const mainPadding = "3rem";
  const [data, setData] = useState({ popup: true });
  const [state, setState] = useState([{ title: "title", money: "300" }]);
  const [addPlane, setAddPlane] = useState(true);
  // _________ End Of Varibales ____________________________

  // _________  Functions  _____________________________________________
  const handleSubmit = (e, formInputs) => {
    e.preventDefault();
    const { setMoney, setTitle, title, money, setData, data } = formInputs;
    // ---------------------------------------------------
    if (title === "" || money === "") return null;
    // ---------------------------------------------------
    if (money > data.salary) return null;
    // ---------------------------------------------------
    if (!Number(money)) return null;
    // ---------------------------------------------------
    setMoney("");
    setTitle("");
    // ---------------------------------------------------
    setState([...state, { title, money }]);
    setAddPlane(true);
    setData({ ...data, salary: data.salary - money });
    // ---------------------------------------------------
  };
  // __________________________________________________________
  const toggleAddPalne = () => data.salary && setAddPlane(!addPlane);
  // _________ End Of Functions  _______________________________________

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
        <AddPlane
          state={state}
          handleSubmit={handleSubmit}
          toggleAddPalne={toggleAddPalne}
          addPlane={addPlane}
          data={{ data, setData }}
        />
      </main>
    </section>
  );
}

export default HomePage;
