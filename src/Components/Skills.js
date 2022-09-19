import React from 'react'

export default function Skills(props) {
    return (
        <div className="bg-slate-200 p-3 rounded-md">
            <div className="text-slate-500 font-bold  ">{props.Desc}</div>
            <div className="text-slate-500 font-normal my-6">{props.Desc2}</div>

            <div className='flex sm:justify-center overflow-x-auto '>
                {props.Skill.map(name => ( 
                    <div className="mr-1 bg-red-300 rounded-md">
                        <div className="mx-1 text-white text-sm font-bold  ">{name}</div>
                    </div>
                ))}
            </div>


        </div>
    )
}
