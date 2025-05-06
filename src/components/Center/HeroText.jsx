import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useRef } from "react";

const HeroText = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    let clutter = "";
    const splittedText = textRef.current.innerText.split("");
    splittedText.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });
    textRef.current.innerHTML = clutter;

    gsap.from("h1 span", {
      y: 100,
      opacity: 0,
      duration: 0.7,
      delay: 2.3,
      stagger: 0.1,
    });
  });

  return (
    <div className="flex items-center ">
      <h1
        ref={textRef}
        className="whitespace-nowrap font-black font-[u8] leading-none uppercase sm:text-[21vw] text-[24vw] tracking-tight"
      >
        Arock
      </h1>
      <span className="self-start sm:pt-12 pt-2">
        <p className="border-white sm:border-[4px] border-[2px] rounded-full sm:text-xl text-xs font-[u7] py-[1px] px-[4px] sm:px-[8px]">
          R
        </p>
      </span>
    </div>
  );
};

export default HeroText;
