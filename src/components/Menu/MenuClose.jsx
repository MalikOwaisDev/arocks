import React from "react";

const MenuClose = (props) => {
  const { menuOpen, setmenuOpen } = props;
  const menuBarClose = () => {
    setmenuOpen(false);
    console.log(menuOpen);
  };
  return (
    <div
      onClick={menuBarClose}
      className="uppercase font-[a4] hover:cursor-pointer active:scale-y-95 text-xs opacity-80 text-right z-100 hover:opacity-70"
    >
      Close
    </div>
  );
};

export default MenuClose;
