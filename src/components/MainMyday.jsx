// MainMyday.js
import React from "react";
import { image1, image2, image3, image4 } from "../assets/images";

const MainMyday = () => {
  const mydays = [
    {
      name: "Jhon Paul S. Eco",
      profile: <i className="fa-solid fa-user text-white"></i>,
      image: image1,
    },
    {
      name: "Ruel Salazar",
      profile: <i className="fa-solid fa-user text-white"></i>,
      image: image2,
    },
    {
      name: "Geh Thei",
      profile: <i className="fa-solid fa-user text-white"></i>,
      image: image3,
    },
    {
      name: "Erich May Penipona",
      profile: <i className="fa-solid fa-user text-white"></i>,
      image: image4,
    },
    {
      name: "Erich May Penipona",
      profile: <i className="fa-solid fa-user text-white"></i>,
      image: image4,
    },
    {
      name: "Erich May Penipona",
      profile: <i className="fa-solid fa-user text-white"></i>,
      image: image4,
    },
    {
      name: "Erich May Penipona",
      profile: <i className="fa-solid fa-user text-white"></i>,
      image: image4,
    },
  ];

  return (
    <div className="flex z-10 overflow-x-hidden max-w-[590px] mx-auto px-4 py-4  ">
      <div className="">
        <ul className="flex gap-2 py-2 ">
          <li className=" hover:opacity-90 h-64">
            <div
              className="h-[200px] w-[150px] bg-cover  bg-center rounded-t-xl shadow-lg"
              style={{
                backgroundImage: `url(https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/423672175_3699153610408415_4085387455801009384_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7wt8mkYrm_IAb5GrH3F&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfDx1dJ71tuW1TIMwK-sBCeISR0EpS1hkjAnXk37vr3B-w&oe=6614938E)`,
              }}
            ></div>
            <div className="rounded-b-xl h-[58px] bg-white relative   ">
              <i class="fa-solid fa-plus absolute bottom-[42px] left-[56px] text-white bg-blue-600 rounded-full h-8 w-8 ring-4 ring-white flex justify-center items-center text-xl"></i>
              <h1 className="font-semibold absolute text-sm bottom-[10px] left-[37px]">
                Create story
              </h1>
            </div>
          </li>
          {mydays.map((items) => (
            <li className="w-[150px]  h-64 relative overflow-hidden rounded-xl ">
              <div
                className="h-64 bg-cover w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${items.image})` }}
              ></div>
              <h1 className="absolute top-5 left-5 p-4 bg-slate-200 w-8 h-8 ring-4 ring-blue-600 flex justify-center items-center text-white rounded-full">
                {items.profile}
              </h1>
              <h1 className="absolute bottom-3 left-3 text-white font-semibold">
                {items.name}
              </h1>
            </li>
          ))}
          
        </ul>
   
      </div>
   
    </div>
  );
};

export default MainMyday;
