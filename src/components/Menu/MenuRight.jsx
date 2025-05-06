import React from "react";
import MenuClose from "./MenuClose";
import Logo from "../Navbar/Logo";

const MenuRight = (props) => {
  return (
    <div className=" sm:w-1/3 w-full flex flex-col items-center justify-between pl-4 sm:pl-24">
      <div className="w-full h-[6%] text-sm relative py-4 px-4 flex items-end flex-col ">
        <MenuClose menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
      </div>
      <div className="w-full h-[94%] flex flex-col items-center justify-between">
        <div className="logo -mt-8 sm:mt-0 w-full h-[5%]">
          <span className="w-10 h-10">
            <Logo />
          </span>
        </div>
        <div className="menu w-full h-[30%]  flex flex-col justify-center">
          {["about", "story", "Projects", "releases"].map((item) => (
            <h3 className="uppercase font-[u7] text-3xl">{item}</h3>
          ))}
        </div>
        <div className="info w-full h-[40%] flex  font-[a4] opacity-70 uppercase text-[0.6rem] font-semibold pb-10">
          <div className=" w-[50%] h-full flex flex-col justify-between">
            <h3 className="flex gap-2 items-center">
              Follow <br />
              (AROCK)
            </h3>
            <h3 className="flex gap-2 items-center">
              listen <br />
              (AROCK)
            </h3>
            <h3 className="flex gap-2 items-center">get in touch</h3>
            <h3 className="flex gap-2 items-center">
              san diego <br />
              bpm music <br />
              1600 national Ave <br />
              san diego, ca 92123
            </h3>
          </div>
          <div className=" w-[50%] h-full flex flex-col justify-between">
            <h3 className="flex gap-2 items-center">
              instagram <br />
              youtube
            </h3>
            <h3 className="flex gap-2 items-center">
              spotify <br />
              mixcloud
            </h3>
            <h3 className="flex gap-2 items-center">email</h3>
            <h3 className="flex gap-2 items-center">
              los angeles <br />
              6255 sunset blvd. <br />
              suite #700 <br />
              los angeles, ca 90082
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRight;
