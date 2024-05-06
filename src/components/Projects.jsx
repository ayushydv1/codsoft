import React from 'react'
import proImg from '../assets/img29.jpg'
import Card from './Card'
function Projects() {
  return (
    <div className="h-screen py-8  bg-center bg-cover">
      <h1 className='text-3xl text-white font-bold text-center '>Our work</h1>
        <div className='flex px-[25px] my-6 gap-1 flex-wrap 
        '>
          <Card 
           img = {proImg}
            name = "willWatch"
            para = "texhnology used lund chaap cheera chutmari ka jyoti"
           />
            <Card 
           img = {proImg}
            name = "wingman"
            para = "texhnology used lund chaap cheera partyaknvh adfjl"
           />
            <Card 
           img = {proImg}
            name = "heapSink"
            para = "texhnology used lund chaap cheera chawanni chaap pistol"
           />
           <Card 
           img = {proImg}
            name = "heapSinkc"
            para = "texhnology used lund chaap cheera chawanni chaap pistol"
           />
         
            
        </div>
    </div>
  )
}

export default Projects