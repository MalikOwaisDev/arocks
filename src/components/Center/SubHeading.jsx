import React from "react";

const SubHeading = () => {
  return (
    <div className="sm:-mt-6 uppercase font-[a4] sm:text-xs text-[10px] leading-none tracking-tight opacity-80 flex justify-between items-center text-justify pr-7">
      <div>
        <h3 className="flex gap-2 items-center">
          <i className="ri-play-mini-fill sm:p-[7px] p-[4px] sm:text-[16px] text-[10px] border-1 border-white rounded-full "></i>
          Play <br />
          the film
        </h3>
      </div>
      <div className="flex sm:gap-21 gap-8">
        <h3>
          Creator <br />
          curator
        </h3>
        <h3>
          new york <br />
          los angeles
        </h3>
      </div>
    </div>
  );
};

export default SubHeading;
