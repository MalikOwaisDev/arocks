import React from "react";
import HeroText from "./HeroText";
import SubHeading from "./SubHeading";

const CenterText = () => {
  return (
    <div className="absolute text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] select-none ">
      <HeroText />
      <SubHeading />
    </div>
  );
};

export default CenterText;
