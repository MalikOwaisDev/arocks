import React from "react";

const Menu = (props) => {
  const { menuOpen, setmenuOpen } = props;
  const menuBarOpens = () => {
    setmenuOpen(true);
    console.log(menuOpen);
  };
  return (
    <div
      onClick={menuBarOpens}
      className="font-[a4] text-xs uppercase opacity-80 active:scale-y-95 py-2 hover:cursor-pointer hover:opacity-70"
    >
      Menu
    </div>
  );
};

export default Menu;
