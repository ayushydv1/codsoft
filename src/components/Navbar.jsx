import React from 'react'
import About from './About'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  
const handleShift=()=>{
    <link rel="stylesheet" href="" />
}
const Navbar = () => (
  
    <>
        <div className="flex justify-evenly container w-screen py-2 items-center ">
            <h1 className='uppercase text-2xl font-semibold'>portfolio</h1>
            <ul className="flex gap-5  ">
                <li><a href="/" className='hover:text-red-400 hover:underline '>Home</a></li>
                <li><a href="/skills" className='hover:text-red-400 hover:underline'>Skills</a></li>
                <li><a href="/projects" className='hover:text-red-400 hover:underline'>Projects</a></li>
                <li><a href="/more" className='hover:text-red-400 hover:underline'>More</a></li>
                <li><a href="/contact" className='hover:text-red-400 hover:underline'>Contact</a></li>
            </ul>

            <button className="px-8 font-bold p-2 border-solid rounded-lg bg-red-500 hover:bg-blue-400 transition duration-300"><a href="/contact">Hire me!!!</a></button>
        </div>
    </>
)

export default Navbar