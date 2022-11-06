import React, { useState } from "react";
import HomePageNav from "./HomePageNav";
import LoginPopup from "./LoginPopup";
import AddPlane from "./AddPlane";
function HomePage() {
  // _________ Varibales ___________________________________
  const mainPadding = "3rem";
  const [data, setData] = useState({
    planes: [{ title: "food", money: "300" }],
    user: { name: "", balance: "", login: true },
  });
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
    // setState([...state, { title, money }]);
    setAddPlane(true);
    setData({
      planes: [...data.planes, { title, money }],
      user: { ...data.user, balance: data.user.balance - money },
    });
    // ---------------------------------------------------
  };
  // __________________________________________________________
  const toggleAddPalne = () => data.user.balance && setAddPlane(!addPlane);
  // _________ End Of Functions  _______________________________________

  return (
    <section
      className="home-page"
      style={{
        minHeight: "100vh",
      }}
    >
      <LoginPopup data={data} setData={setData} />
      <HomePageNav user={data.user} />
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
          handleSubmit={handleSubmit}
          toggleAddPalne={toggleAddPalne}
          addPlane={addPlane}
          data={data}
          setData={setData}
        />
      </main>
    </section>
  );
}

export default HomePage;
