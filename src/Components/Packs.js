import React from 'react'
import './Components.css';
import Express from './expressjs.png'
import { FaReact } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
export default function Packs(props) {
    return (
        <div className="packs">
            <a href={props.url} target="_blank">
                <img src={props.Image} className="h-36 w-96" />
                <div className="packDownSide">
                    <div className="text-center text-lg font-bold">{props.Headline}</div>
                    <div className="desc">{props.Desc}</div>
                    <div className="techStack">
                        <FaReact className="techs" />
                        <DiNodejs className="techs" />
                        <img src={Express} alt="" className="express" />
                        <SiMongodb className="techs" />
                    </div>
                </div>
            </a>
        </div>
    )
}
