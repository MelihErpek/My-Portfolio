import React from 'react'
import MovingComponent from 'react-moving-text'
import { ReactComponent as Engineer } from './deneme.svg';
import { ReactComponent as Marketing } from './marketing..svg';

export default function AboutMe() {
  return (

    <div className='   bg-slate-50 rounded-2xl  sm:mx-24  '>
      <div className="flex justify-center items-center mt-4 font-extrabold text-sky-800 text-xl ">
        <div className='mt-8 flex'>
          I'm
          <MovingComponent type="typewriter"
            dataText={[
              'Software Engineer',
              'Digital AdOps Executive'
            ]} />
        </div>
      </div>
      <div className='sm:flex justify-around '>
.
        <div className='sm:w-1/2  sm:border-r-4 mt-8 border-b-8 md:border-b-0 lg:border-b-0 xl:border-b-0 2xl:border-b-0'>
          <div className='flex justify-center'>
            <Engineer />
          </div>
          <div className='text-center text-xl font-semibold mt-5'>Software Engineer</div>

          <div className='text-center text-neutral-500 font-bold mt-4 mx-20'>I am graduated from Sakarya University Computer
            Engineering in June 2021. I tried to improve myself in
            the Full-Stack web applications , mobile applications
            and I continue to improve myself.
          </div>
        </div>
        <div className='sm:w-1/2 mt-8'>
          <div className='flex justify-center'>
            <Marketing />
          </div>
          <div className='text-center text-xl font-semibold mt-5'>Digital AdOps Executive</div>

          <div className='text-center text-neutral-500 font-bold mt-4 mx-20 '>Responsible campaign management of Google Ads , Meta and Programmatic. Understanding clients' business needs, aims, objectives and providing them targeting options and marketing solutions. I've previously worked at Arena Media TR and Sparkle Media. Currently i work at Universal Mccan.
          </div>
        </div>
      </div>
      <br />
    </div>


  )
}
