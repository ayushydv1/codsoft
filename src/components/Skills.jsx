import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import {
  MdOutlineArrowCircleRight,
  MdOutlineArrowCircleLeft,
} from "react-icons/md";

import img1 from "../assets/react_logo.png"
import img2 from "../assets/java_logo.png"
import img3 from "../assets/js_logo.png"


// import reactlogo from '../assets/react_logo.png'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Java", "HTML", "CSS", "JavaScript", "Python", "C++"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 9, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const pics = [
  img1,img2,img3
];

const Skills = () => {
  const [swapImg, setSwapImg] = useState(0);

  const handleswap = () => {
    setSwapImg((prevIndex) =>
      prevIndex === pics.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSwap = () => {
    setSwapImg((prevIndex) =>
      prevIndex === 0 ? pics.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="h-1/2 bg-white">
      <div className="h-screen w-2/4 mx-auto flex flex-col items-center justify-center  pt-10  bg-cover bg-center relative top-10">
       
          {" "}
          <div className="h-[500px] w-[450px] border-l-black ">
            <Pie data={data} />
          </div>
          <div className="container w-[500px] bg-transparent text-red-400 rounded-xl">
            <div className="Box flex justify-center items-center gap-10 ">
              <button className="text-4xl" onClick={handleswap}>
                {" "}
                <MdOutlineArrowCircleLeft />{" "}
              </button>
              <img
                src={pics[swapImg]}
                alt="img"
                className="h-[170px] w-[190px] "
              />
              <button className="text-4xl" onClick={handleSwap}>
                {" "}
                <MdOutlineArrowCircleRight />{" "}
              </button>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Skills;
