import React, { useRef } from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const MenuPage = (props) => {
  const menuRef = useRef(null);
  useGSAP(() => {
    if (props.menuOpen) {
      gsap.to(menuRef.current, {
        top: 0,
      });
    }
    if (props.menuOpen === false) {
      gsap.to(menuRef.current, {
        top: "100%",
      });
    }
  }, [props.menuOpen]);
  return (
    <div
      ref={menuRef}
      className="fixed flex h-screen w-full bg-zinc-900 z-60 top-full"
    >
      <MenuLeft />
      <MenuRight menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
    </div>
  );
};

export default MenuPage;
