import React, { useState } from "react";


const MainSharePost = () => {
  const [openComment, setOpenComment] = useState(-1);
  

// For hovering the Option of reacts
  const [option, setOption] = useState(false);

  
// For hovering the Option of reacts
const [hoveredPostIndex, setHoveredPostIndex] = useState(null);

const handleMouseEnter = (index) => {
 setTimeout(() => {
    setHoveredPostIndex(index);
    setOption(true)
  }, 500);
}

const handleMouseLeave = () => {
  // clearTimeout(hoverTimeout);
  setTimeout(() => {
  setHoveredPostIndex(-1);
  setOption(false);


  },500)
}

  const profiles = [
    {
      name: "Jamelyn Entierro",
      profile:
        "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/434977705_393855016759692_7055002330174695423_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Nn4b4LMlU5kAb7Q5hsQ&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfDIlZpeG_cA-cxTfL4D5DVbFlh1UEErmGJ42D9awHknfw&oe=66144A72",
      post: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/434575106_416472604303881_8934570316822116450_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=krpFaJod6I0Ab5AQzDY&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfCR9Q0MIOmSRVZzGzXqfmUuMnfKC6yDVEz340d-q_cIvg&oe=66143060",
      creditImage:
        "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-1/222807314_563728381663580_8601606042883009205_n.jpg?stp=dst-jpg_p148x148&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z-_lgCwu6oQAb4xkoxp&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfDz_0TzVJp7MRxqX4ca86UHokoIiLiRCfTLZnidO0-usg&oe=66144353",
      creditName: "Fluent English",
      creditCaption: "Napakaganda ng mundo, tao lang ang magulo.",

      date: "March 24 at 3:10 PM",
      privacy: <i class="fa-solid fa-earth-americas"></i>,
      reaction: {
        like: <i class=" text-blue-500"> </i>,
        heart: "text-red-500",
        wow: "text-yellow-500",
        angry: "text-red-500",
      },
    },
    {
      name: "Rodrex Amihan ",
      profile:
        "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-1/399571835_1887092578354220_8387580009791761117_n.jpg?stp=c0.32.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vh4DuDmNdfQAb6DN6mU&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfBN2YBoweBF6_CIjrg4f7qsqmYea5RQQXK9xGNd3dTR2g&oe=66144301",
      post: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/434575106_416472604303881_8934570316822116450_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=krpFaJod6I0Ab5AQzDY&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfCR9Q0MIOmSRVZzGzXqfmUuMnfKC6yDVEz340d-q_cIvg&oe=66143060",
      creditImage:
        "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-1/222807314_563728381663580_8601606042883009205_n.jpg?stp=dst-jpg_p148x148&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z-_lgCwu6oQAb4xkoxp&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfDz_0TzVJp7MRxqX4ca86UHokoIiLiRCfTLZnidO0-usg&oe=66144353",
      creditName: "Fluent English",
      creditCaption: "Kaibog admin plsssss!",

      date: "March 24 at 3:10 PM",
      privacy: <i class="fa-solid fa-earth-americas"></i>,
      reaction: "",
    },
    {
      name: "Rodrex Amihan ",  
      profile:
        "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-1/399571835_1887092578354220_8387580009791761117_n.jpg?stp=c0.32.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vh4DuDmNdfQAb6DN6mU&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfBN2YBoweBF6_CIjrg4f7qsqmYea5RQQXK9xGNd3dTR2g&oe=66144301",
      post: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/434924101_435068279181750_6011026047648506493_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eRw9ZjzO_kAAb6_gAEm&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfA0avlCuRz9dnA4MGawEAtOmCCsQBRoHYOxa-ziV3yrZA&oe=661451C4",
      creditImage:
        "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-1/222807314_563728381663580_8601606042883009205_n.jpg?stp=dst-jpg_p148x148&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z-_lgCwu6oQAb4xkoxp&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfDz_0TzVJp7MRxqX4ca86UHokoIiLiRCfTLZnidO0-usg&oe=66144353",
      creditName: "Fluent English",
      creditCaption: "Sexy!",

      date: "March 24 at 3:10 PM",
      privacy: <i class="fa-solid fa-earth-americas"></i>,
      reaction: {
        like: "text-blue-600",
        hearth: "text-red-600",
      },
    },
    {
      name: "Rodrex Amihan ",
      profile:
        "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-1/399571835_1887092578354220_8387580009791761117_n.jpg?stp=c0.32.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vh4DuDmNdfQAb6DN6mU&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfBN2YBoweBF6_CIjrg4f7qsqmYea5RQQXK9xGNd3dTR2g&oe=66144301",
      post: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/434924101_435068279181750_6011026047648506493_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eRw9ZjzO_kAAb6_gAEm&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfA0avlCuRz9dnA4MGawEAtOmCCsQBRoHYOxa-ziV3yrZA&oe=661451C4",
      creditImage:
        "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-1/222807314_563728381663580_8601606042883009205_n.jpg?stp=dst-jpg_p148x148&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z-_lgCwu6oQAb4xkoxp&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfDz_0TzVJp7MRxqX4ca86UHokoIiLiRCfTLZnidO0-usg&oe=66144353",
      creditName: "Fluent English",
      creditCaption: "Sexy!",

      date: "March 24 at 3:10 PM",
      privacy: <i class="fa-solid fa-earth-americas"></i>,
      reaction: {
        like: "text-blue-600",
        hearth: "text-red-600",
      },
    },
  ];
  return (
    <div>
      {profiles.map((post,index) => (
        // Card box
        <div className="card max-w-[500px] mx-auto  py-2 px-4 rounded-xl bg-white mb-4 shadow-sm">
          <div className="flex justify-between items-center gap-2 ">
            <div className="flex justify-between items-center">
              <img
                className="w-10 h-10 rounded-full "
                src={post.profile}
                alt=""
              />
              <div className="flex flex-col mx-2">
                <h1>{post.name}</h1>
                <p className="text-slate-500 text-[13px] flex items-center gap-2">
                  4m .
                  <i class="fa-solid fa-user-group text-slate-500  flex justify-center items-center text-[10px]"></i>
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center gap-5 text-slate-500 text-lg ">
              <i class="fa-solid fa-ellipsis"></i>
              <i class="fa-solid fa-xmark text-2xl font-semibold"></i>{" "}
            </div>
          </div>
          {/* Post */}
          <div className="card-post mt-2">
            <img className="rounded-t-xl" src={post.post} alt="" />
          </div>
          <div className="border-[1px] border-gray-300 rounded-b-xl ">
            <div className="card-footer flex gap-2 pt-5 px-3">
              <img
                className="rounded-full h-10 w-10"
                src={post.creditImage}
                alt=""
              />
              <div className="flex flex-col ">
                <h2 className="font-semibold ">{post.creditName}</h2>
                <p className="text-[12px] font-semibold text-slate-500">
                  {post.date} <span>{post.privacy}</span>
                </p>
              </div>
            </div>
            <div className="profile-caption pb-3 px-3">
              <h1 className="text-semibold text-md">{post.creditCaption}</h1>
            </div>
          </div>
          {/* React */}

          <div className="react my-3">
            <div className="react rounded-full p-2 w-4 h-4 flex justify-center items-center bg-red-500">
              <i class="fa-solid fa-heart text-white text-[10px]"></i>
            </div>
          </div>
          {/* Option */}
          <div className="border-[1px] border-gray-300 my-2"></div>
          <ul className="flex justify-around gap-6 text-md font-semibold text-slate-500">
            <li
              className="flex-1 relative " 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <div className="flex gap-2 justify-center items-center cursor-pointer hover:bg-gray-200 px-auto  py-2  rounded-xl  ">
                <i class={`fa-regular fa-thumbs-up ${post.reaction}`}></i>

                <h1>Like</h1>
              </div>
              {/* React option */}
                <div className={`${hoveredPostIndex === index && option ? "block" : "hidden"}  relative  `}>
                  <ul className=" bg-slate-100 border-[1px]   shadow-xl h-17 w-[350px] px-5 py-5  rounded-full absolute bottom-[40px] left-[0]  flex justify-between items-center">
                    <li className="flex gap-2 p-2 items-center  text-4xl cursor-pointer  justify-center  hover:bg-gray-300 hover:rounded-full  relative ">
                      <h1 className="absolute hover:text-5xl">👍</h1>
                    </li>
                    <li className="flex gap-2 p-2 items-center  text-4xl cursor-pointer  justify-center  hover:bg-gray-300 hover:rounded-full relative ">
                      <h1 className="absolute hover:text-5xl">❤️</h1>
                    </li>
                    <li className="flex gap-2 p-2 items-center  text-4xl cursor-pointer  justify-center  hover:bg-gray-300 hover:rounded-full relative">
                      <h1 className="absolute hover:text-5xl">🥰</h1>
                    </li>
                    <li className="flex gap-2 p-2 items-center  text-4xl cursor-pointer  justify-center  hover:bg-gray-300 hover:rounded-full relative">
                      <h1 className="absolute hover:text-5xl">😆</h1>
                    </li>
                    <li className="flex gap-2 p-2 items-center  text-4xl cursor-pointer  justify-center  hover:bg-gray-300 hover:rounded-full relative">
                      <h1 className="absolute hover:text-5xl">🥲</h1>
                    </li>
                    <li className="flex gap-2 p-2 items-center  text-4xl cursor-pointer  justify-center  hover:bg-gray-300 hover:rounded-full relative">
                      <h1 className="absolute hover:text-5xl">😲</h1>
                    </li>
                    <li className="flex gap-2 p-2 items-center  text-4xl cursor-pointer  justify-center  hover:bg-gray-300 hover:rounded-full relative">
                      <h1 className="absolute hover:text-5xl">😡</h1>
                    </li>
                  </ul>
                </div>
            </li>
            {/* Comment open */}
            <li className="flex-1 " onClick={() => setOpenComment(index)}>
              <div className="flex gap-2 justify-center items-center cursor-pointer hover:bg-gray-200 px-auto  py-2  rounded-xl">
                <i class="fa-regular fa-comment-dots"></i>
                <h1>Comment</h1>
              </div>
            </li>

            <li className="flex-1 ">
              <div className="flex gap-2 justify-center items-center cursor-pointer hover:bg-gray-200 px-auto  py-2  rounded-xl">
                <i class="fa-solid fa-share"></i>
                <h1>Share</h1>
              </div>
            </li>
          </ul>
          <div className="border-[1px] border-slate-200 my-2"></div>


{/* Open after clicking the comment */}
          <div className={`flex  gap-2 items-start ${openComment === index ? "block" : "hidden"}`}>
            <img
              className="rounded-full w-10 h-10"
              src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-1/423672175_3699153610408415_4085387455801009384_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE_ol_DZaqAWNxJ5BfaaPWI77iDPC4fWS_vuIM8Lh9ZL65BciG9FD3fTasWn-XkrZWk3Ag6X2DGMbzZNj9MuUuv&_nc_ohc=uMkzMc-9CP0Ab5vZLAt&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfALd9oTAF3AB2mjIH8X3SDE8zrMP6sigaqppJlSQfwHpg&oe=66168990"
              alt=""
            />
            <div>


              <div className="rounded-xl bg-slate-100 p-2 w-[380px] max-w-[400px] ">
                <textarea
                  className="outline-none resize-none bg-slate-100 "
                  name=""
                  id=""
                  cols="40"
                  rows="0"
                  placeholder="Write Comment..."
                ></textarea>
                {/* Comment reaction option  */}
                <div className=" text-slate-500 flex justify-between ">
                  <ul className="flex justify-between gap-4">
                    <li><i class="fa-regular fa-face-smile cursor-pointer"></i></li>
                    <li><i class="fa-solid fa-camera cursor-pointer"></i></li>
                    <li><i class="fa-solid fa-gift cursor-pointer" ></i></li>
                    <li><i class="fa-regular fa-note-sticky cursor-pointer"></i></li>
                  </ul>

                  <i class="fa-solid fa-chevron-right cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSharePost;
