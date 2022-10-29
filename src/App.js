import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
function App() {
  return (
    <section className="App">
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes> */}
      <HomePage />
    </section>
  );
}

export default App;
