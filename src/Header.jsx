import React, { useState } from "react";

const Header = () => {
  const [openMessenger, setOpenMessenger] = useState(false);
  const [hoverListChat, setHoverListChat] = useState(-1);
  const [hoverListCondition, setHoverListCondition] = useState(false);
  const [openConversation, setOpenCoversation] = useState(true);

  const handleMouseEnter = (index) => {
    setHoverListCondition(true);

    setHoverListChat(index);
  };
  const handleMouseLeave = () => {
    setHoverListChat(null);
    setHoverListCondition(false);
  };
  const messages = [
    {
      id: 1,
      name: "Adrian Barrioss",
      nickname: "Underdog",
      profile:
        "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-1/342805416_6430692393627804_7089258403426895782_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7ztbAylG1EyV1_UXH8HyoLsM3d7qxNiAuwzd3urE2IObxzoQ7bkUiSo0Btdi3G45IyOY3PjehkPy187KWTzUI&_nc_ohc=CrwY1611DHEAb5BXT9H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfC1f3-35BZJGcEsCXLsTr1ekepY9Hz1S9Y4EvRrjTvbNg&oe=66176AF9",
      chat: "Dami mo nangang electricfan",
      // more
    },
    {
      id: 2,
      name: "Jobert Dela Cruz",
      nickname: "Jobert Dela Cruz",
      profile:
        "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-1/433144291_2111893395837094_5241777717003793999_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXrdOIQi8U1LvDkzXA6JyG7ABShiAUAWvsAFKGIBQBa1eDMolX6Z7JaAw10L_rvs_OR8ydxx1WMvqpuaS2TOx2&_nc_ohc=g8P7FkBul2YAb7udk-X&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfBXgUuR6toBVyrwiEv31XIFAwuVWVHLNzCoSr1GpMP65w&oe=661777A1",
      chat: "Gago HAHHAH YUNG MUKA KO DYAN 😭",
      // more
    },
    {
      id: 3,
      name: "Jobert Dela Cruz",
      nickname: "Jobert Dela Cruz",
      profile:
        "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-1/433144291_2111893395837094_5241777717003793999_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXrdOIQi8U1LvDkzXA6JyG7ABShiAUAWvsAFKGIBQBa1eDMolX6Z7JaAw10L_rvs_OR8ydxx1WMvqpuaS2TOx2&_nc_ohc=g8P7FkBul2YAb7udk-X&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfBXgUuR6toBVyrwiEv31XIFAwuVWVHLNzCoSr1GpMP65w&oe=661777A1",
      chat: "Gago HAHHAH YUNG MUKA KO DYAN 😭",
      // more
    },
    {
      id: 4,
      name: "Jobert Dela Cruz",
      nickname: "Jobert Dela Cruz",
      profile:
        "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-1/433144291_2111893395837094_5241777717003793999_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXrdOIQi8U1LvDkzXA6JyG7ABShiAUAWvsAFKGIBQBa1eDMolX6Z7JaAw10L_rvs_OR8ydxx1WMvqpuaS2TOx2&_nc_ohc=g8P7FkBul2YAb7udk-X&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfBXgUuR6toBVyrwiEv31XIFAwuVWVHLNzCoSr1GpMP65w&oe=661777A1",
      chat: "Gago HAHHAH YUNG MUKA KO DYAN 😭",
      // more
    },
    {
      id: 6,
      name: "Adrian Barrios",
      nickname: "Underdog",
      profile:
        "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-1/342805416_6430692393627804_7089258403426895782_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7ztbAylG1EyV1_UXH8HyoLsM3d7qxNiAuwzd3urE2IObxzoQ7bkUiSo0Btdi3G45IyOY3PjehkPy187KWTzUI&_nc_ohc=CrwY1611DHEAb5BXT9H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfC1f3-35BZJGcEsCXLsTr1ekepY9Hz1S9Y4EvRrjTvbNg&oe=66176AF9",
      chat: "Dami mo nangang electricfan",
      // more
    },
  ];

  const latestConvo = () => {
    conversation
  }

  const conversation = [
    {
      id: 1,
      personName:"Adrey Barrios",
      personProfile:
        "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-1/342805416_6430692393627804_7089258403426895782_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7ztbAylG1EyV1_UXH8HyoLsM3d7qxNiAuwzd3urE2IObxzoQ7bkUiSo0Btdi3G45IyOY3PjehkPy187KWTzUI&_nc_ohc=mTdJwZaqlisAb5E4R9X&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfC8XmkvEiBKoXjCPs-Niuk4kd0yX9v3-Un1jzKNGag-IA&oe=66188439",
      personConversation: "",
      user: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-1/423672175_3699153610408415_4085387455801009384_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE_ol_DZaqAWNxJ5BfaaPWI77iDPC4fWS_vuIM8Lh9ZL65BciG9FD3fTasWn-XkrZWk3Ag6X2DGMbzZNj9MuUuv&_nc_ohc=uMkzMc-9CP0Ab5vZLAt&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfArx3DBDHLDqNCuap3Bj4m27GJT5aUHB4-0saMkB_4OSA&oe=661883D0",
      userConversation: "Oo naman",
    },
    {
      id: 2,
      personProfile:
        "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-1/342805416_6430692393627804_7089258403426895782_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7ztbAylG1EyV1_UXH8HyoLsM3d7qxNiAuwzd3urE2IObxzoQ7bkUiSo0Btdi3G45IyOY3PjehkPy187KWTzUI&_nc_ohc=mTdJwZaqlisAb5E4R9X&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfC8XmkvEiBKoXjCPs-Niuk4kd0yX9v3-Un1jzKNGag-IA&oe=66188439",
      personConversation: " Jap Pogi mo talaga",
      user: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-1/423672175_3699153610408415_4085387455801009384_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE_ol_DZaqAWNxJ5BfaaPWI77iDPC4fWS_vuIM8Lh9ZL65BciG9FD3fTasWn-XkrZWk3Ag6X2DGMbzZNj9MuUuv&_nc_ohc=uMkzMc-9CP0Ab5vZLAt&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfArx3DBDHLDqNCuap3Bj4m27GJT5aUHB4-0saMkB_4OSA&oe=661883D0",
      userConversation: "hello",
    },
    {
      id: 3,
      personProfile:
        "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-1/342805416_6430692393627804_7089258403426895782_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7ztbAylG1EyV1_UXH8HyoLsM3d7qxNiAuwzd3urE2IObxzoQ7bkUiSo0Btdi3G45IyOY3PjehkPy187KWTzUI&_nc_ohc=mTdJwZaqlisAb5E4R9X&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfC8XmkvEiBKoXjCPs-Niuk4kd0yX9v3-Un1jzKNGag-IA&oe=66188439",
      personConversation: "",
      user: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-1/423672175_3699153610408415_4085387455801009384_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE_ol_DZaqAWNxJ5BfaaPWI77iDPC4fWS_vuIM8Lh9ZL65BciG9FD3fTasWn-XkrZWk3Ag6X2DGMbzZNj9MuUuv&_nc_ohc=uMkzMc-9CP0Ab5vZLAt&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfArx3DBDHLDqNCuap3Bj4m27GJT5aUHB4-0saMkB_4OSA&oe=661883D0",
      userConversation: "hello",
    },
  ];

  return (
    <header>
      <nav className="max-container shadow-md w-full bg-[#FFFFFF] z-50 sticky top-0 ">
        <div className="flex justify-between items-center px-2">
          <div className="w-2/6">
            <div className="flex gap-1 justify-start items-center ">
              <i class="fa-brands fa-facebook text-[#0866FF] cursor-pointer text-[40px] px-2 py-2"></i>
              <div className="flex justify-center items-center bg-[#F0F2F5] text-slate-500 rounded-full px-3 py-2 max-lg:py-3 ">
                <i class="fa-solid fa-magnifying-glass flex justify-center  items-center w-5 h-5 text-sm rounded-full lg:mr-2 "></i>
                <input
                  type="text"
                  className="outline-none bg-transparent border-none text-gray-900 lg:block hidden max-w-[180px]"
                  placeholder="Search Facebook"
                />
              </div>
              <i class="fa-solid fa-bars max-md:block hidden text-slate-500 cursor-pointer text-2xl px-2 py-2 ml-3"></i>
            </div>
          </div>
          {/* Mid Terms */}
          <div className="w-4/6">
            <ul className="flex items-center justify-around max-md:hidden ">
              <li className="border-b-2 border-blue-600">
                <i className="fa-solid fa-house hover:bg-gray-200 p-4 cursor-pointer   rounded-xl px-6 py-4 text-blue-600 text-xl"></i>
              </li>
              <li className="">
                <i className="fa-solid fa-tv hover:bg-gray-200 p-4  cursor-pointer rounded-xl px-6 py-4 text-gray-500 text-xl"></i>
              </li>
              <li className="relative ">
                <i className="fa-solid fa-store hover:bg-gray-200 p-4 cursor-pointer rounded-xl text-gray-500 text-xl z-20"></i>
              </li>
              <li className="justify">
                <i className="fa-solid fa-users hover:bg-gray-200 p-4  cursor-pointer rounded-xl text-gray-500 text-xl"></i>
              </li>
              <li className="hidden lg:block">
                <i className="fa-solid fa-gamepad hover:bg-gray-200 p-4 cursor-pointer  rounded-xl text-gray-500 text-xl"></i>
              </li>
              <li className="block lg:hidden">
                <i className="fa-solid fa-bars hover:bg-gray-200 p-4  cursor-pointer rounded-xl  text-gray-500 text-xl"></i>
              </li>
            </ul>
          </div>
          {/* Right Term */}
          <div className="w-2/6  ">
            <ul className=" flex gap-7 items-center justify-end ">
              <li className="lg:hidden block">
                <i class="fa-solid fa-plus text-[#050505] flex-1 flex  cursor-pointer justify-center items-center  w-10 h-10 rounded-full text-lg "></i>
              </li>
              <li className="lg:block hidden">
                <i className="fa-solid fa-bars bg-gray-200 text-[#050505] flex-1 flex  cursor-pointer justify-center items-center  w-10 h-10 rounded-full text-lg "></i>
              </li>
              <li className="flex  justify-center items-center  rounded-full  relative">
                <i
                  class={`${
                    openMessenger
                      ? "text-blue-900 bg-blue-100 "
                      : "text-[#050505] bg-slate-100"
                  } fa-brands fa-facebook-messenger absolute active:bg-slate-300 active:w-9 active:h-9 active:text-lg   flex-1 flex cursor-pointer justify-center items-center  w-10 h-10 rounded-full text-xl `}
                  onClick={() => setOpenMessenger(!openMessenger)}
                ></i>

                {/*Container Open messenger chats */}
                <div
                  className={`${
                    openMessenger ? "block" : "hidden"
                  } absolute bg-white rounded-md shadow-xl border-[1px] border-slate-200 z-20 bottom-[-510px] left-[-250px]  `}
                >
                  <div className="px-4 py-4 overflow-y-scroll h-[430px] w-[365px] hide-scrollbar ">
                    <div className="flex justify-between items-center pb-3 ">
                      <div>
                        <h1 className="font-bold text-2xl">Chats </h1>
                      </div>
                      <div className="flex justify-between flex-row items-center gap-4 text-slate-600 text-md">
                        <i class="fa-solid fa-ellipsis p-2 rounded-full hover:bg-slate-100 active:bg-slate-200 cursor-pointer flex justify-center items-center"></i>
                        <i class="fa-solid fa-expand p-2 rounded-full hover:bg-slate-100 active:bg-slate-200 cursor-pointer justify-center items-center"></i>
                        <i class="fa-regular fa-pen-to-square p-2 rounded-full hover:bg-slate-100 active:bg-slate-200 cursor-pointer justify-center items-center"></i>
                      </div>
                    </div>
                    <div className="py-2 px-4 w-full bg-[#F0F2F5] rounded-full flex justify-start items-center gap-2">
                      <i class="fa-solid fa-magnifying-glass text-slate-500"></i>
                      <input
                        className=" bg-transparent outline-none"
                        type="text"
                        placeholder="Search Messenger"
                      />
                    </div>
                    <div className="flex py-2 justify-start gap-3">
                      <button className="py-2 px-3 bg-blue-100 rounded-full hover:bg-slate-100 font-semibold text-blue-900">
                        Inbox
                      </button>
                      <button className="py-2 px-3 hover:bg-slate-100 rounded-full font-semibold ">
                        Communities
                      </button>
                    </div>
                    {/* List Chat */}
                    <ul className="w-full flex flex-col gap-2 py-2">
                      {messages.map((chat, index) => (
                        <li
                          key={index}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave()}
                          className={`${
                            hoverListChat === index && hoverListCondition
                              ? "bg-gray-100"
                              : ""
                          } relative flex justify-start items-center gap-2 rounded-md  py-2 px-2 cursor-pointer`}
                        >
                          <div>
                            <img
                              className="rounded-full h-14 w-14"
                              src={chat.profile}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h2 className="text-md font-semibold ">
                              {chat.nickname}
                            </h2>
                            <p className="text-[13px] font-semibold text-slate-500">
                              {chat.chat}
                            </p>
                          </div>
                          <div
                            onMouseEnter={() => set}
                            className={`${
                              hoverListChat === index ? "block" : "hidden"
                            } absolute right-[40px] `}
                          >
                            <i class="fa-solid fa-ellipsis rounded-full text-xl shadow-xl h-10 w-10 flex justify-center items-center border-[1px] border-slate-200 bg-white hover:bg-slate-200 hover:shadow-none  "></i>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Footer chat */}
                  <div className="Footer-chat">
                    <div className="border-b-[1px] py-2  border-gray-200"></div>
                    <div className="flex justify-center items-center py-2">
                      <h1 className="text-center text-md text-blue-600 font-semibold r">
                        See all Messenger
                      </h1>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex  justify-center items-center w-10 h-10 rounded-full bg-gray-200 ">
                <i class="fa-solid fa-bell text-[#050505] flex-1 flex  justify-center items-center cursor-pointer w-10 h-10 rounded-full text-lg "></i>
              </li>
              <li className="flex  justify-center items-center ">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-1/423672175_3699153610408415_4085387455801009384_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7wt8mkYrm_IAb5zhNQz&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfCLlOf2Fvwp1YVuPfG_g23JNvJZPR8KzUK3Wnvc4mfUXg&oe=66141ED0"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Footer */}
      <div
        className={`${
          openConversation ? "block" : "hidden"
        } max-w-[1440px] mx-auto absolute bottom-0 right-5 z-20 flex justify-between `}
      >
        <ul className="flex flex-row-reverse relative">
          <li className=" h-[450px] w-[330px] rounded-lg bg-white  shadow-lg  ">
            {/* card-message-header */}
            <div className="header bg-white  border-b-[1px] border-slate-200  rounded-t-lg px-2 py-2">
              <div className="flex justify-between items-center gap-4 ">
                <div className="flex items-center justify-between gap-2 cursor-pointer">
                  <img
                    className="rounded-full h-9 w-9  "
                    src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/435096265_7577389195655635_2790171083564593803_n.png?stp=c21.0.64.64a_cp0_dst-png_p64x64&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRBMuU7ODy_tE9ES_yYhCCrGyJhuw4woKsbImG7DjCgttA-BeL7K1wup7bdoJg1fklV0yy3i127clZGctQT5FM&_nc_ohc=v9t7jPcn8WwAb7EQQnd&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfADDzwBKVkAHu37MvInXcZ2E-DMCkN8VhE8ylS-dEeLVg&oe=6617ED3E"
                    alt="image"
                  />
                  <div>
                    <h1 className="text-[16px] font-semibold">Underdog</h1>
                    <i class="fa-solid fa-bell-slash text-sm"></i>
                  </div>
                  <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className="cursor-pointer text-gray-600 ">
                  <ul className="flex justify-between items-center gap-2 text-lg">
                    <li className="">
                      <i class="fa-solid fa-phone"></i>
                    </li>
                    <li className="">
                      <i class="fa-solid fa-video"></i>
                    </li>
                    <li className="">
                      <i class="fa-solid fa-minus"></i>
                    </li>
                    <li onClick={() => setOpenCoversation(!openConversation)}>
                      <i class="fa-solid fa-xmark text-xl"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* card-message-body */}
            <div className="px-2 py-2 w-full">
              <ul className="overflow-y-scroll h-80 w-full">
              <div className="header-body">
                    <img src={conversation.personProfile[3]} alt="" />
                </div>
                {conversation.map((chat, index) => (
                  <li key={index}>
                  
                    <div
                      className={`${
                        chat.personConversation !== "" ? "flex" : "hidden"
                      }   items-center gap-2 py-2 `}
                    >
                      <img
                        className="rounded-full w-8 h-8"
                        src={chat.personProfile}
                        alt="image"
                      />
                      <ul className="flex justify-between items-center">
                        <li className="flex flex-col gap-1 justify-end">
                          <p className="rounded-tr-lg rounded-br-lg rounded-tl-lg text-sm  text-slate-700 font-semibold bg-gray-200 p-2">
                            {chat.personConversation}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div
                      className={`${
                        chat.userConversation !== "" ? "flex" : "hidden"
                      } justify-end my-2`}
                    >
                      <p className="rounded-tr-lg rounded-br-lg rounded-tl-lg text-sm  text-slate-700 font-semibold bg-gray-200 p-2">
                        {chat.userConversation}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="w-full px-4 h-16  absolute bottom-0 left-0 py-2 text-xl text-gray-600 cursor-pointer">
            <ul className="flex gap-2 justify-between items-center">
              <li className="">
                <i class="fa-solid fa-circle-plus"></i>
              </li>
              <li className="">
                <i class="fa-regular fa-images"></i>
              </li>
              <li className="">
                <i class="fa-regular fa-note-sticky"></i>
              </li>
              <li className="">
                <i class="fa-solid fa-gift"></i>
              </li>
              <li className="">
                <div className="rounded-full py-2 px-2  flex gap-2 items-center justify-between bg-slate-100">
                  <input
                    className="outline-none bg-transparent w-[100px] text-sm"
                    placeholder="Aa"
                    type="text"
                  />
                  <i class="fa-solid fa-face-smile"></i>
                </div>
              </li>
              <li className="">
                <i class="fa-solid fa-thumbs-up"></i>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse p-4 cursor-pointer">
          <i class="fa-regular fa-pen-to-square text-xl rounded-full shadow-xl font-semibold p-6 bg-white border-[1px] border-slate-200 h-10 w-10 flex justify-center items-center"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
