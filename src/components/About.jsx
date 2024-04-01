import style from "../../public/styles/About.module.css"
import { IoCameraOutline } from "react-icons/io5";
import Image from "next/image"
import ThreeDCardDemo from "./Card3D"
import DotBackgroundDemo from "@/ui/grid_bg";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";



export default function About(){
    return(
        <div className={style.about} >
            
            <div className={style.aboutBx}> 
                
                <div className={style.headerAbout}>   
                        <ThreeDCardDemo/>
                </div>
            </div>
            {/*<div className={style.skills}>
                <div className={style.label}>
                    <FaHtml5 className="icon"/>
                    <span>HTML</span>
                </div>
                <div className={style.label}>
                    <FaCss3Alt className="icon"/>
                    <span>CSS</span>
                </div>
                <div className={style.label}>
                    <IoLogoJavascript className="icon"/>
                    <span>Javascript</span>
                </div>
                <div className={style.label}>
                    <BiLogoTypescript className="icon"/>
                    <span>Typescript</span>
                </div>
                <div className={style.label}>
                    <FaReact className="icon"/>
                    <span>React</span>
                </div>
                <div className={style.label}>
                    <SiNextdotjs className="icon"/>
                    <span>Next</span>
                </div>
                <div className={style.label}>
                    <FaGitAlt className="icon"/>
                    <span>Git</span>
                </div>
                <div className={style.label}>
                    <FaGithub className="icon"/>
                    <span>Github</span>
                </div>

              
            </div>*/}

  
        </div>
 
        
    )
}