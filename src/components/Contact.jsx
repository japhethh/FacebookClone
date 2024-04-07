import React from "react";

const Contact = () => {
  const contacts = [
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
    {
      name: "Hannah Locaylocay",
      profile:
        "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-1/343604861_652931476659930_960522107481749563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xDQySfSmIKkAb7iSOOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfB0-mD94rEh5AAngz5J_vCpoTfN6HsHZQ-IhIc0lB9PUA&oe=6614C11D",
    },
  ];
  return (
    <div className="">
      <div className="flex gap-2 items-center justify-between py-3">
        <h1 className="text-lg font-semibold text-slate-600">Contacts</h1>
        <div className="flex gap-2 items-center">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className="contacts overflow-y-none h-[300px] text-slate-400">
        <ul className="flex flex-col gap-3">
          {contacts.map((item) => (
            <li className="flex justify-start gap-2 ">
              <img
                className="w-8 h-8 rounded-full opacity-30"
                src={item.profile}
                alt="profile"
              />
              <h2 className="font-semibold text-md">{item.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
