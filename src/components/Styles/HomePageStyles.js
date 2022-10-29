const styles = {
  homePage: {
    height: "100vh",
    backgroundColor: "lightBlue",
    overflow: "scroll",
  },
  main: {
    background: "white",
    height: "90%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(20%,1fr))",
    gridTemplateRows: "repeat(2,50%)",
    gap: ".5rem",
    alignItems: "flex-start",
  },
  addPlane: {
    background: "black",
    height: "100%",
    minHeight: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  balance: {
    fontSize: "6rem",
    color: "white",
    backgroundColor: "transparent",
  },
};
export default styles;
