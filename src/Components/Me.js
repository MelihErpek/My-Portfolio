import React from 'react'
import Tick from './meliherpek.jpg'
import './Components.css';
export default function Me() {
    return (
        <div className="me">
            <div className='text-6xl font-bold text-slate-800 font-maven '>
                Hi , I'm Melih
            </div>
            <div className="md:flex mt-10">
                <p className='jobs'>
                    Software Engineer
                    <p className="text-left text-sm mt-5 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le
                    </p>
                </p>
                <img className=" rounded-full bg-red-700" src={Tick} alt="" />
                <p className='jobs'>
                    Performance Marketing Executive
                </p>
            </div>
        </div>
    )
}
