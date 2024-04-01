"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d_card";
import Link from "next/link";
import style from "../../public/styles/About.module.css"
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var card">
      
                
          
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl   ">
      <CardItem
          translateZ="60"
          className="w-full mt-4 image"
         
        >
          <div className={`${style.header} ${style.headerAbout}`}>
                About me</div>
        </CardItem>
        
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         I am a passionate biomedical engineer with a strong interest in web development. 
                                My fascination with technology and desire to create innovative solutions led me to delve into the world of web development. 
                                Currently, 
                                I am expanding my skills in the field of design to complement my web development experience.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 image">
          


          {/*<Image
            src="/images/photo_2024-04-01_16-59-12.jpg"
            height="400"
            width="400"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
  />*/}
          <div>Skills</div>
          <div className={style.skills}>
                <div className={style.label}>
                <img src="https://skillicons.dev/icons?i=html" className="icon" />
                    <span>HTML</span>
                </div>
                <div className={style.label}>
                <img src="https://skillicons.dev/icons?i=css" className="icon"/>
                    <span>CSS</span>
                </div>
                <div className={style.label}>
                <img src="https://skillicons.dev/icons?i=js" className="icon"/>
                    <span>Javascript</span>
                </div>
                <div className={style.label}>
                <img src="https://skillicons.dev/icons?i=ts" className="icon"/>
                    <span>Typescript</span>
                </div>
                <div className={style.label}>
                <img src="https://skillicons.dev/icons?i=react" className="icon"/>
                    <span>React</span>
                </div>
                <div className={style.label}>
                <img src="https://skillicons.dev/icons?i=nextjs" className="icon"/>
                    <span>Next</span>
                </div>
                <div className={style.label}>
                <img src="https://skillicons.dev/icons?i=git" className="icon"/>
                    <span>Git</span>
                </div>
                <div className={style.label}>
                <img src="https://skillicons.dev/icons?i=github" className="icon"/>
                    <span>Github</span>
</div>


              
            </div>
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4 image">
        <div>Currently learning</div>
          <div className={style.skills}>
          <div className={style.label}>
                <img  src="https://skillicons.dev/icons?i=blender" className="icon" />
                    <span>Blender</span>
                </div>
                <div className={style.label}>
                <img  src="https://skillicons.dev/icons?i=threejs" className="icon" />
                    <span>Threejs</span>
                </div>

          </div>
           
        </CardItem>
       {/*<div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>*/}
      </CardBody>
    </CardContainer>
  );
}
