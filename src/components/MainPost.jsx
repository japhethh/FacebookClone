import React from "react";

const MainPost = () => {
  const option = [
    {
      category: "Live video",
      icon: "fa-solid fa-video",
      color:"text-red-500"
    },
    {
      category: "Photo/video",
      icon: "fa-regular fa-image",
      color:"text-green-500"

    },
    {
      category: "Feeling/activity",
      icon: "fa-regular fa-face-grin",
      color:"text-yellow-500"

    },
  ];
  return (
    <div>
      <div className="card max-w-[500px] mx-auto  py-3 my-2 px-4 rounded-xl bg-white shadow-lg" >
        <div className="card-header flex justify-between items-center gap-2">
          <img
            className="rounded-full w-10 h-10"
            src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-1/423672175_3699153610408415_4085387455801009384_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7wt8mkYrm_IAb5zhNQz&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfCLlOf2Fvwp1YVuPfG_g23JNvJZPR8KzUK3Wnvc4mfUXg&oe=66141ED0"
            alt=""
          />
          <input
            className="rounded-full w-full py-2 px-5 bg-gray-100 outline-none "
            type="text"
            placeholder="What is on your mind, Adrey?"
          />
        </div>
        <div className="border-b-[1px] py-2  border-gray-200"></div>
        <ul className="flex items-center gap-4 justify-center py-2 px-2">
          {option.map((item) => (
            <li className="flex items-center gap-2 ">
              <i class={`${item.icon} text-xl ${item.color}`}></i>
              <h1 className="font-semibold text-md text-slate-600">{item.category}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPost;
