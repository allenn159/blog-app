import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Frontpage from "./components/Frontpage";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div style={{ fontFamily: "Sarabun" }}>
      <NavBar setSearch={setSearch} />
      <Frontpage search={search}></Frontpage>
    </div>
  );
}

export default App;
