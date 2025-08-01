import React from 'react'

const Card3 = () => {
  return (
    <div className='mt-[85px] items-center  '>
            <div className="rounded-xl p-4 bg-[#f0f0f0] w-[300px] h-[200px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qkzD0e4_jNguNfEKk4IWP3u5Is2KxUN8uQ&s')] bg-cover bg-center bg-no-repeat text-white">
        <h2 className="text-sm font-semibold mb-[8px]">Time Tracker</h2>
        <p className="flex justify-center mb-6 font-semibold text-4xl leading-tight mb-1">01:24:08</p>
        <div className='flex items-center justify-center text-white'>
            <img className='hover:scale-125' src="https://img.icons8.com/ios-filled/50/FFFFFF/pause.png" alt="" />
            <img className='hover:scale-125'src="https://img.icons8.com/material-outlined/50/FFFFFF/stop-circled.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Card3