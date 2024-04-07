// MainArea.js
import React from "react";
import MainMyday from "./MainMyday";
import MainPost from "./MainPost";
import MainSharePost from "./MainSharePost";

const MainArea = ({ max_width }) => {
  return (
    <div className={`${max_width} bg-[#F0F2F5]   w-full  overflow-y-scroll max-h-[90vh]`}>
      <div className="relative">
      <i class="fa-solid fa-chevron-left  back absolute top-[120px] z-40 left-[100px] cursor-pointer  rounded-full p-6 bg-white text-gray-600  text-2xl h-10 w-10 flex justify-center items-center "></i>
      <i class="fa-solid fa-chevron-right  back  absolute top-[120px] z-40 right-[100px] cursor-pointer rounded-full p-6 bg-white text-gray-600  text-2xl h-10 w-10 flex justify-center items-center"></i>
      <MainMyday />
      <MainPost />
      <MainSharePost />
      </div>
    </div>
  );
};

export default MainArea;
