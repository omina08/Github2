import React from 'react'

const Card1 = () => {
  return (
    <div className='mt-[100px] w-[400px]'>
            <div className="rounded-xl p-4 bg-[#f0f0f0] w-[300px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qkzD0e4_jNguNfEKk4IWP3u5Is2KxUN8uQ&s')] bg-cover bg-center bg-no-repeat text-white">
        <h2 className="text-sm font-semibold mb-2">Reminders</h2>
        <p className="font-semibold text-lg leading-tight mb-1">Download our Mobile <br /> App</p>
        <p className="text-sm  mb-4">Time: 02:00 pm - 04:00 pm</p>
        <button className="bg-green-700 text-white w-full py-2 rounded-xl hover:bg-white hover:text-black">Download</button>
      </div>
    </div>
  )
}

export default Card1
