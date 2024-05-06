import React from "react";
import img from "../assets/img32.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import resume from "../assets/2resume.pdf";
const About = () => {
  return (
    <>
      <div className="parent flex  bg-cover bg-cente">
        {/* left div */}
        <div className="h-screen w-[600px]">
          <div className="absolute top-[270px] left-[30px]">
            <ul className="flex flex-col gap-10">
              <li>
                <a
                  href="https://www.linkedin.com/in/ayush-kumar-yadav-618b462bb/"
                  target="_blank"
                  className="text-4xl hover:bg-red-900 "
                >
                  <FaLinkedin className="hover:scale-125 hover:text-red-600 transition duration-400 ease "/>
                </a>
              </li> 
              <li>
                <a href="#" className="text-4xl h">
                  <FaGithub className="hover:scale-125 hover:text-red-600 transition duration-400 ease"/>
                </a>
              </li>
              <li>
                <a href="#" className="text-4xl ">
                  <BsTwitterX className="hover:scale-125 hover:text-red-600 transition duration-400 ease"/>
                </a>
              </li>
            </ul>
          </div>
          {/* frame */}
          <div className="h-[400px] w-[400px] bg-black rounded-full flex items-center justify-center overflow-hidden absolute top-[28%] left-[232px] shadow-[0_0_30px_red]">
            <img src={img} alt="img" className="overflow-hidden w-[500px]" />
          </div>
        </div>
        <div className="right w-[870px] flex items-center justify-center border-solid-black">
          <div className="box w-[500px] text-white flex flex-col gap-4 items-start ">
            <h1 className=" font-serif font-semibold text-black text-4xl text-pretty text-center ">Hey!! I am Ayush Yadav</h1>
            <p>
              I'm a passionate and experienced web developer dedicated to
              creating stunning, responsive, and user-friendly websites. With a
              strong background in Frontend as well as Backend technologies,
              I strive to deliver high-quality solutions that exceed
              expectations.
            </p>
            <button className="bg-red-500 w-[250px] py-2 rounded-lg hover:bg-red-900 transition duration-300 font-bold hover:scale-110">
              <a href={resume} target="_blank">See My Resume</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
