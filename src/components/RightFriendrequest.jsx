import React from "react";

const RightFriendrequest = () => {
  return (
    <div >
      <div className="flex justify-between items-center ">
        <h1 className="text-slate-600 font-semibold text-lg">Friend Request</h1>
        <h1 className="text-blue-600 font-semibold">See all</h1>
      </div>
      <div className="card hover:bg-slate-300 rounded-xl py-2 px-2">
        <div className="flex gap-2 items-center ">
          <img
            className="h-12 w-12 rounded-full"
            src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zA2qd53xmQAAb4Wyfem&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfAf8lubKyahxKIycQ8xUm6uSCRb5OfbCjMcgEjFEm11dQ&oe=6635DBF8"
            alt=""
          />
          <div className=" flex-col gap-2 mb-2">
            <h1>Ruel Quima</h1>
            <p className="text-gray-500">2 mutual friends</p>
          </div>
        </div>

        <div className="flex justify-center mb-2 items-center">
          <button className="py-2 px-3 bg-[#0866FF] rounded-md text-white font-semibold mr-3">
            Confirm
          </button>
          <button className="py-2 px-3 my-1 bg-slate-200  rounded-md text-[#242525] font-semibold">
            Delete
          </button>
        </div>
      </div>

      {/* hr */}
      <div className="border-[1px] border-slate-200 my-4"></div>
    </div>
  );
};

export default RightFriendrequest;
