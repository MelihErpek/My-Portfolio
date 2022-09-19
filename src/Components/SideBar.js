import React from 'react'
import Photo from './meliherpek.jpg'
import './Components.css';
import { RiLinkedinFill, RiGithubLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <img className="sidebarPhoto " src={Photo} alt="" />
                </div>
                <div className="flex justify-center mt-4 text-2xl font-bold  ">Melih Erpek</div>
                <div className="flex justify-center mt-4">
                    <div className="w-8 h-8 bg-black mx-4 flex justify-center items-center rounded-full animate-bounce">
                        <a href="https://www.linkedin.com/in/meliherpek/" target="_blank">
                            <RiLinkedinFill className="icons " />
                        </a>
                    </div>
                    <div className="w-8 h-8 bg-black mx-4 flex justify-center items-center rounded-full animate-bounce">
                        <a href="https://github.com/MelihErpek" target="_blank">
                            <RiGithubLine className="icons" />
                        </a>
                    </div>
                    <div className="w-8 h-8 bg-black mx-4 flex justify-center items-center rounded-full animate-bounce">
                        <a href="mailto:meliherpek26@gmail.com" ><GrMail className="icons" ></GrMail></a>
                    </div>
                </div>
                <div className="flex justify-center mt-3 font-bold  ">
                </div>
            </div>
            <div className="flex justify-center text-xs w-screen sm:w-auto sm:text-base  ">
                <div className='sidebarNav'><a href="/aboutme" >About Me</a></div>
                <div className='sidebarNav'><a href="/projects" className="mx-24" >Projects</a></div>
                <div className='sidebarNav'><a href="/myskills">My Skills</a></div>
            </div>

        </div>
    )
}
