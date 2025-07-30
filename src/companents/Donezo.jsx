import React from 'react'
import { Link } from 'react-router-dom'

const Donezo = () => {
  return (
    <div className='bg-gray-100'>
    <div className="pt-[10px] p-6 text-gray-700 flex flex-col justify-between bg-gray-100 rounded-3xl">
      <div className='mb-[150px] '>
        <p className="text-xs font-semibold text-gray-400 mb-4">MENU</p>

        <ul className="space-y-4">
          <li className="flex items-center space-x-3 font-semibold text-black">
            <div className="w-5 h-5  rounded-sm"><img src="https://img.icons8.com/carbon-copy/100/737373/tasks.png" alt="" /></div> 
            <span><Link to={'/dashboard'} >Dashboard</Link></span>
          </li>

          <li className="flex items-center space-x-3">
            <div className="w-5 h-5 rounded-sm"> <img src="https://img.icons8.com/forma-thin/50/737373/tasks.png" alt="" /></div> 
            <span>Tasks</span>
            <span className="ml-auto bg-green-600 text-white text-xs px-2 py-0.5 rounded">12+</span>
          </li>

          <li className="flex items-center space-x-3">
            <div className="w-5 h-5 rounded-sm"><img src="https://img.icons8.com/material-outlined/50/737373/calendar--v1.png" alt="" /></div> 
            <span>Calendar</span>
          </li>

          <li className="flex items-center space-x-3">
            <div className="w-5 h-5  rounded-sm"><img src="https://img.icons8.com/ios-glyphs/50/737373/analytics.png" alt="" /></div> 
            <span>Analytics</span>
          </li>

          <li className="flex items-center space-x-3">
            <div className="w-5 h-5  rounded-full"><img src="https://img.icons8.com/ios-glyphs/50/737373/business-group.png" alt="" /></div>
            <span>Team</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 mt-4 mb-4">GENERAL</p>

        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <div className="w-5 h-5  rounded-full"><img src="https://img.icons8.com/ios/250/737373/apple-settings.png" alt="" /></div> 
            <span>Settings</span>
          </li>

          <li className="flex items-center space-x-3">
            <div className="w-5 h-5  rounded-full"><img src="https://img.icons8.com/material-outlined/50/737373/help.png" alt="" /></div>
            <span>Help</span>
          </li>

          <li className="flex items-center space-x-3">
            <div className="w-5 h-5 rounded-full"><img src="https://img.icons8.com/material-outlined/50/737373/exit.png" alt="" /></div> 
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>

    </div>
  )
}

export default Donezo
