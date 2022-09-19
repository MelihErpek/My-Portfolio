import React from 'react'
import Skills from './Skills'
export default function MySkills() {
  return (
    <div className='bg-slate-50 rounded-2xl sm:mx-24 mx-2  '>
      <div className="p-10">
        <Skills 
          Skill={["HTML","JavaScript","React JS","React Native","Context API(UseContext)","Redux","VueJS","Vuex",] } 
          Desc={"Frontend"} 
          Desc2={"I'm using ReactJS and VueJS for Frontend development. I have a mobile app development experience with React Native. I do state management with Context API,Redux in ReactJs and with Vuex in VueJS. I'm using Netlify and Heroku for deployment."} 
        />
         <br />
        
        <Skills 
          Skill={["CSS","Bootstrap","Tailwindcss"] } 
          Desc={"Style"}
          Desc2={"I can do responsive desing with CSS,Bootstrap and Tailwindcss."}
        />
        <br />
        <Skills 
          Skill={["NodeJS","ExpressJS","MongoDB","JWT"] } 
          Desc={"Backend & Database"}
          Desc2={"I'm using NodeJS & ExpressJS for backend and using MongoDB for database. I can do backend,database stuff with that stack. Especially authentication&authorization,data updates, preparing data for frontend etc. For example i can make an api with using database. I'm using Heroku for deployment. "}
        />
        <br />
        <Skills 
          Skill={["C","C++","C#","Java"] } 
          Desc={"C Family and Java"}
          Desc2={"Clooge"}
        />
        <br />
        <Skills 
          Skill={["Google Ads","Meta Ads","Programmatic","Google Analytics","Google Tag Manager" ,"Twitter Ads"] } 
          Desc={"Digital,Performance Marketing"}
          Desc2={"Currently responsible campaign management of Google Ads , Meta and Programmatic at Universal Mccan.I am using Google Analytics for performance measurement."}
        />
        
      </div>
    </div>


  )
}
