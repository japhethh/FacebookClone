import React from 'react'
import LeftMenu from "./components/LeftMenu";
import LeftShortcut from "./components/LeftShortcut";

const Overflow = () => {
  return (
    <div className="min-h-screen w-full  bg-blue-500">
      <div className="flex">
        <div className="bg-red-500 w-2/12 min-h-screen</div>">
        <div className="overflow-y-scroll  w-full  max-h-screen ">
          <LeftMenu />
          <LeftShortcut />
          </div>
        </div>
        <div className="bg-violet-500 w-8/12 min-h-screen "></div>
        <div className="bg-green-500 w-2/12 min-h-screen "></div>
      </div>
    </div>
  )
}

export default Overflow