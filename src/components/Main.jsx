// Main.js
import React from "react";
import MainArea from "./MainArea";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Main = () => {
  return (
    
    <div className="flex   bg-[#F0F2F5]   ">
      <Leftside max_width=" w-4/12 z-10" />
      <MainArea max_width="w-6/12 z-10" />
      <Rightside max_width="w-4/12 z-10" />
    </div>
  );
};

export default Main;
