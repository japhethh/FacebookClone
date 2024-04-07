import React from "react";
import LeftMenu from "./LeftMenu";
import LeftShortcut from "./LeftShortcut";
const leftside = ({max_width}) => {
  return (
    <div className={`${max_width} max-lg:hidden block  bg-[#F0F2F5]   `}>
        <div className="overflow-y-scroll  w-full  max-h-[90vh]  hide-scrollbar  ">
          <LeftMenu />
          <LeftShortcut />
        </div>
    </div>
  );
};

export default leftside;
