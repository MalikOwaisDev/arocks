import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useRef } from "react";

const LoadChild = () => {
  const lineRef = useRef(0);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(lineRef.current, {
      width: "100%",
      duration: 1.3,
      delay: 0.7,
      ease: "expo.inOut",
    }).to(lineRef.current, {
      x: "100%",
      duration: 1,
      ease: "expo.inOut",
    });
  });

  return <div ref={lineRef} className="w-0 h-full bg-white"></div>;
};

export default LoadChild;
