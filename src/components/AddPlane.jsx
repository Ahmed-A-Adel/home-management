import React, { useState } from "react";
import { Link } from "react-router-dom";
function AddPlane({ addPlane, handleSubmit, toggleAddPalne, data, setData }) {
  //   ___________ VAribales __________________________________________
  const [title, setTitle] = useState("");
  const [money, setMoney] = useState("");
  //   ___________ End Of VAribales ___________________________________
  //   ___________ Functions __________________________________________
  const handleClick = (e) =>
    handleSubmit(e, {
      title,
      setTitle,
      money,
      setMoney,
      data,
      setData,
    });
  // ____________________________________________________________
  //   ___________ End Of Functions ___________________________________
  return (
    <>
      {" "}
      {data.user.balance >= 1 ? (
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
            <form onSubmit={handleClick}>
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

              <button type="submit" onClick={handleClick}>
                add one
              </button>
            </form>
          )}
        </article>
      ) : (
        ""
      )}
      {data.planes &&
        data.planes.map((plane, i) => (
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
    </>
  );
}

export default AddPlane;
