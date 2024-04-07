import React from "react";
import RightFriendrequest from "./RightFriendrequest";
import RightBirthday from "./RightBirthday";
import Contact from "./Contact";

const Rightside = ({ max_width }) => {
  return (
    <div className={` ${max_width} max-h-[90vh] max-lg:hidden block bg-[#F0F2F5] overflow-y-scroll px-3 `}>
      <div className="w-full   mx-auto py-5  max-w-[250px]">
        <RightFriendrequest />
        <RightBirthday />
        <Contact />
      </div>
    </div>
  );
};

export default Rightside;
