import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CenterText from "./components/Center/CenterText";
import LoadParent from "./components/Loading/LoadParent";
import Home from "./components/Landing/Home";
import MenuPage from "./components/Menu/MenuPage";

function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="h-screen w-full bg-[#141414] overflow-hidden">
      <MenuPage menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <LoadParent />
      <Home menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
    </div>
  );
}

export default App;
