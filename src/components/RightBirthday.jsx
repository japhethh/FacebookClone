import React from "react";

const RightBirthday = () => {
  return (
    <div>
      <h1 className="font-semibold text-slate-700 text-lg mb-3"> Birthdays</h1>
      <div className="flex justify-center gap-2">
        <div className="flex justify-center   ">
          <i class="fa-solid fa-gift text-blue-500 text-lg "></i>
        </div>
        <div className="card ">
          <h1>
            <strong>Name</strong> and <strong>2 others</strong> have birthday
            today.
          </h1>
        </div>
      </div>
      <div className="border-[1px] border-slate-200 my-4"></div>
    </div>
  );
};

export default RightBirthday;
