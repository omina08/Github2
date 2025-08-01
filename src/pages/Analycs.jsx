import React from 'react'

const Analycs = () => {
  return (
    <div className="pt-[30px] flex gap-4 ml-[20px]">

      <div className="rounded-xl p-4 bg-[#f0f0f0] w-[690px] ">
        <h2 className="text-sm font-semibold mb-4">Project Analytics</h2>
        <div className="flex gap-8 items-end">
        <img className="w-16 h-40 object-cover rounded-[200px]" src="https://thumbs.dreamstime.com/b/silver-white-diagonal-stripes-seamless-pattern-vector-93028921.jpg" alt="bg" />
        <div className="w-16 h-36 rounded-xl rounded-[200px] bg-green-400"></div>
        <div className="w-16 h-[120px] rounded-xl rounded-[200px] bg-green-300"></div>
        <div className="w-16 h-[160px] rounded-xl rounded-[200px] bg-green-500"></div>
        <img className="w-16 h-40 object-cover rounded-[200px]" src="https://thumbs.dreamstime.com/b/silver-white-diagonal-stripes-seamless-pattern-vector-93028921.jpg" alt="bg" />
        <img className="w-16 h-[120px] object-cover rounded-[200px]" src="https://thumbs.dreamstime.com/b/silver-white-diagonal-stripes-seamless-pattern-vector-93028921.jpg" alt="bg" />
        <img className="w-16 h-40 object-cover rounded-[200px]" src="https://thumbs.dreamstime.com/b/silver-white-diagonal-stripes-seamless-pattern-vector-93028921.jpg" alt="bg" />
      </div>
      <div className='flex gap-[87px] ml-[25px] mt-[10px]'>
        <h1>S</h1>
        <h1>M</h1>
        <h1>T</h1>
        <h1>W</h1>
        <h1>T</h1>
        <h1>F</h1>
        <h1>S</h1>
      </div>
      </div>

   
      <div className="rounded-xl p-4 bg-[#f0f0f0] w-[300px]">
        <h2 className="text-sm font-semibold mb-2">Reminders</h2>
        <p className="font-semibold text-lg leading-tight mb-1">Meeting with Arc <br /> Company</p>
        <p className="text-sm text-gray-500 mb-4">Time : 02:00 pm - 04:00 pm</p>
        <button className="bg-green-700 hover:bg-white hover:text-black text-white w-full py-2 rounded-xl">🎥  Start Meeting</button>
      </div>


      <div className="rounded-xl p-4 bg-[#f0f0f0] w-[300px]">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-semibold">Project</h2>
          <button className="px-3 py-1 rounded-full border text-sm">+ New</button>
        </div>
        <ul className="space-y-3 text-sm">
          <li>
            <span className="font-medium">Develop API Endpoints</span>
            <p className="text-gray-500 text-xs">Due date: Nov 26, 2024</p>
          </li>
          <li>
            <span className="font-medium">Onboarding Flow</span>
            <p className="text-gray-500 text-xs">Due date: Nov 28, 2024</p>
          </li>
          <li>
            <span className="font-medium">Build Dashboard</span>
            <p className="text-gray-500 text-xs">Due date: Nov 30, 2024</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Analycs

