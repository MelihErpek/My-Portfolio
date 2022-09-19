import React from 'react'

export default function AboutMeSides(props) {
    return (
        <div className='sides'>
            
            <div className='title'> 
                {props.title}
            </div>
            <div className='about'>
                {props.about}
            </div>

        </div>

    )
}
