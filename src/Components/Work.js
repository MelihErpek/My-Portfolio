import React from 'react'
import Packs from './Packs'
import Tabure from './tabure.png'
import Psikoloog from './psikoloog.png'
import foundit from './foundit.jpg'
export default function Work() {
  return (
    <div className='bg-slate-50 rounded-2xl mx-4 sm:mx-24 '>
      <div>
        <div className="sm:flex  items-center justify-center">
          <Packs Image={Tabure}
            Desc={"Bar Taburesi is a blog site. If you are an admin you can add blog post or you can create an author.Bar Taburesi made with MERN Stack (MongoDB , ExpressJS , ReactJS , NodeJS).I made all the designs and i developed the whole full stack web application."}
            Headline={"Bar Taburesi"} url={"https://bartaburesi.netlify.app"}
          />
          <Packs Image={Psikoloog}
            Desc={"Desc"}
            Headline={"Psikoloog"}
            url={"https://psikoloog.netlify.app"}
          />
        </div>
        <div className="sm:flex items-center justify-center">
          <Packs Image={foundit}
            Desc={"You can get a job at Found It or you can be an employer at Found It.Found It made with React-Native , ExpressJS , NodeJS and MongoDB. I made all the designs and i developed the whole full stack application."}
            Headline={"Found It!"}
            url={"https://expo.dev/@erpeks/meliherpekmobileapp"}
          />
          <Packs Image={foundit}
            Desc={"Desc"}
            Headline={"Influence Yourself"}
          />
        </div>
      </div>
    </div>
  )
}
