import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import CenterText from "../Center/CenterText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Home = (props) => {
  const homeRef = useRef(null);
  const pageRef = useRef(null);
  useGSAP(() => {
    gsap.to(homeRef.current, {
      y: "-100%",
      duration: 0.8,
      delay: 2,
    });
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.8,
      duration: 1,
      y: 50,
      scale: 1.05,
    });
  });
  return (
    <div className="h-screen">
      <div
        ref={homeRef}
        className="h-screen fixed w-full z-10 bg-[#141414]"
      ></div>
      <div
        ref={pageRef}
        className="h-screen w-full bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]"
      >
        <Navbar menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
        <CenterText />
      </div>
    </div>
  );
};

export default Home;
