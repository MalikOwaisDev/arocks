import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = (props) => {
  return (
    <div className="w-full flex items-top justify-end sm:justify-between px-4 py-3">
      <div className="sm:flex hidden">
        <Logo />
      </div>
      <Menu menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
    </div>
  );
};

export default Navbar;
