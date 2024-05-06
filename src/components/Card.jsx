import React from 'react'

function Card(props) {
  return (
    <>
    
    <div className='container rounded-lg bg-blue-900 p-4 flex flex-col items-center gap-2 cursor-pointer shadow-[0_0_30px_red] w-[325px] h-[425px]'>
                <img className='w-[250px] h-[260px] rounded-md' src={props.img} alt="project img 1" />
                <h2 className='font-bold uppercase'>{props.name} </h2>
                <h3 className="text-sm">{props.para}</h3>
                <button className='bg-red-700 w-[290px] py-2 rounded-lg hover:bg-gray-800 transition duration-300'>Get Repo</button>
            </div>
    
    </>
  )
}

export default Card;