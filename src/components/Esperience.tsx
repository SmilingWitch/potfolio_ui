"use client";
import React from "react";
/*import { calsans } from "@/fonts/calsans";*/
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import style from "../../public/styles/About.module.css"
import { FaLink } from "react-icons/fa";

export function Experience() {
  return (


    
    <TracingBeam className="px-6 ">
      <div className={style.header}>
        <h1>Projects</h1></div>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge( "text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>

  );
}

const dummyContent = [
  {
    title: "E-commerce",
    description: (
      <>
        <p>
            An e-commerce platform for cacti is an excellent choice for succulent plant lovers
            .
            
        </p>
        <p>
        Being fully responsive, the website adapts seamlessly to different devices, allowing 
            users to explore and purchase cacti from their desktop computers, tablets, or mobile phones. 
            Additionally, the website provides a secure authentication system using JSON Web Tokens (JWT), 
            ensuring that only authorized users can access exclusive features such as placing orders and accessing order history. 

        </p>

        
      </>
    ),
    badge: <FaLink className="iconLink"/>,
    image:
      "/images/Screenshot 2024-04-01 175948.png",
  },
  {
    title: "Wallet",
    description: (
      <>
        <p>
        Versatile wallet provides a wide range of services to facilitate your financial transactions.
         With options for transfers, sending and receiving funds, our wallet offers the necessary flexibility 
         to manage your resources conveniently and efficiently. Whether you need to send money to a friend, 
         make payments, or receive funds from clients, our platform allows you to do so securely and hassle-free. 
        </p>

      </>
    ),
    badge: <FaLink className="iconLink"/>,
    image:
      "/images/Screenshot 2024-04-01 180258.png",
  },
  {
    title: "Yield Farming Plataform",
    description: (
      <>
        <p>
        A Web3 platform interface for cryptocurrency exchange
        </p>
      </>
    ),
    badge:<FaLink className="iconLink"/>,
    image:
      "/images/Screenshot 2024-04-01 180802.png",
  },
];
