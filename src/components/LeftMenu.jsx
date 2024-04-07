import React from "react";

const LeftMenu = () => {
  return (
    <div className="whitespace break-words  " >
      <div className="text-wrap">
        <ul className="flex flex-col py-4 px-3 gap-1 font-semibold text-[15px]">
          <li className="flex justify-start items-center gap-2 cursor-pointer rounded-lg py-1 px-1 hover:bg-slate-200">
            <div className="rounded-full  ">
              <img className="w-10 h-10 rounded-full "
                src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-1/423672175_3699153610408415_4085387455801009384_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7wt8mkYrm_IAb5GrH3F&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfA-1FwC5FRVGw1LmTpZNxnD2wpWN772rD0n5TYcmggB5g&oe=66148F50"
                alt=""
              />
            </div>
            <h2>Adrian Locaylocay</h2>
          </li>
          <li className="flex justify-start items-center gap-2 cursor-pointer  rounded-lg py-1 px-1 hover:bg-slate-200 ">
            <div className="rounded-full">
              <i class="fa-solid fa-user-group text-blue-500 w-8 h-8 flex justify-center items-center text-lg"></i>
            </div>
            <h2>Friends</h2>
          </li>
          <li className="flex justify-start items-center gap-2  cursor-pointer rounded-lg py-1 px-1 hover:bg-slate-300 ">
            <div className="rounded-full  ">
              <i class="fa-solid fa-shop text-blue-500  w-8 h-8 flex justify-center items-center text-lg "></i>
            </div>
            <h2>Marketplace</h2>
          </li>
          <li className="flex justify-start items-center gap-2 cursor-pointer rounded-lg py-1 px-1 hover:bg-slate-300">
            <div className="rounded-full  ">
              <i class="fa-solid fa-clock-rotate-left text-blue-500  w-8 h-8 flex justify-center items-center text-lg"></i>
            </div>
            <h2>Memories</h2>
          </li>
          <li className="flex justify-start items-center gap-2 cursor-pointer rounded-lg py-1 px-1 hover:bg-slate-300">
            <div className="rounded-full  ">
              <i class="fa-solid fa-bookmark  text-blue-500  w-8 h-8 flex justify-center items-center text-lg"></i>
            </div>
            <h2>Saved</h2>
          </li>
          <li className="flex justify-start items-center cursor-pointer gap-2 rounded-lg py-1 px-1 hover:bg-slate-300">
            <div className="rounded-full  ">
              <i class="fa-solid fa-people-group rounded-full  text-blue-500 w-8 h-8  flex justify-center items-center text-lg"></i>
            </div>
            <h2>Group</h2>
          </li>
          <li className="flex justify-start items-center cursor-pointer gap-2 rounded-lg py-1 px-1 hover:bg-slate-300">
            <div className="rounded-full bg-gray-200 ">
              <i class="fa-solid fa-angle-down rounded-full  text-blue-500 w-8 h-8  flex justify-center items-center text-lg"></i>
            </div>
            <h2 className="">See more</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftMenu;
