import React from 'react'

const Contact = () => {
  const handleSubmit = (event) =>{
    event.preventDefault()
    const form = event.target

    const clientName = form.clientName.value
    const clientEmail = form.clientEmail.value
    const clientNumber = form.clientNumber.value

    const bookObj = {
      clientName, clientEmail, clientNumber
    }
    console.log(bookObj);

    //send data to database
    fetch("http://localhost:8000/contact",{
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data =>{
      alert("Congrats I will respond as sson as possioble")
      form.reset()
    })
  }
  return (
    <>
    <div className='h-screen  items-center justify-center flex'>
        <div className="container bg-gray-400 w-1/3 rounded-3xl shadow-lg shadow-red" >
        <form onSubmit={handleSubmit} className=' flex flex-col items-start p-7 gap-x-2'>

            <label className='font-color-white font-bold' htmlFor="Name"> Name: </label>
            <input id='clientName' className='w-[350px] py-2 px-2 rounded-md' type="text" />
            <label className='font-bold mt-4' htmlFor="Name"> Email: </label>
            <input id='clientEmail' className='w-[350px] py-2 px-2 rounded-md' type="email" />
            <label className='font-bold mt-4' htmlFor="Name"> Contact Number: </label>
            <input id='clientNumber' className='w-[350px] py-2 px-2 rounded-md' type="tel" maxLength={10}/>
            <button className='bg-red-500 text-white p-4 rounded-2xl shadow-lg shadow-white mt-6 hover:translate-y-[-8px] transition duration-300 ease-in-out'>Contact me!</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Contact