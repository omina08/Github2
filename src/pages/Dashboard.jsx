import React from 'react'

const Dashboard = () => {
  return (
    <div>
          <div className="bg-gray-100 p-[24px] font-sans rounded-xl mt-[20px] ml-[20px]">
      <div className=" mx-auto">
<div className='flex justify-between mb-6'>
<div>
<h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
</div>
        <div className=" flex gap-3">
          <button className="bg-green-700 text-white w-32 rounded-md hover:bg-white hover:text-black rounded-3xl">+ Add Project</button>
          <button className="border w-28 rounded-md hover:bg-green-600 hover:text-white rounded-3xl">Import Data</button>
        </div>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" bg-white hover:bg-green-600  p-5 rounded-xl hover:text-white">
            <div className="flex justify-between">
              <div>
                <h2 className="text-sm">Total Projects</h2>
                <p className="text-3xl font-bold">24</p>
                <p className="text-xs mt-1">+5 Increased from last month</p>
              </div>
              <img className='w-8 h-8' src="https://img.icons8.com/external-thin-kawalan-studio/50/external-arrow-up-right-arrows-thin-kawalan-studio.png" alt="" />
            </div>
          </div>

          <div className="bg-white text-black p-5 rounded-xl shadow-sm hover:bg-green-600 hover:text-white">
            <div className="flex justify-between">
              <div>
                <h2 className="text-sm">Ended Projects</h2>
                <p className="text-3xl font-bold">10</p>
                <p className="text-xs mt-1">+6 Increased from last month</p>
              </div>
              <img className='w-8 h-8' src="https://img.icons8.com/external-thin-kawalan-studio/50/external-arrow-up-right-arrows-thin-kawalan-studio.png" alt="" />
            </div>
          </div>

          <div className="bg-white text-black p-5 rounded-xl shadow-sm hover:bg-green-600 hover:text-white">
            <div className="flex justify-between">
              <div>
                <h2 className="text-sm">Running Projects</h2>
                <p className="text-3xl font-bold">12</p>
                <p className="text-xs mt-1">+2 Increased from last month</p>
              </div>
              <img className='w-8 h-8' src="https://img.icons8.com/external-thin-kawalan-studio/50/external-arrow-up-right-arrows-thin-kawalan-studio.png" alt="" />
            </div>
          </div>

          <div className="bg-white text-black p-5 rounded-xl shadow-sm hover:bg-green-600 hover:text-white">
            <div className="flex justify-between">
              <div>
                <h2 className="text-sm">Pending Project</h2>
                <p className="text-3xl font-bold">2</p>
                <p className="text-xs mt-1">On Discuss</p>
              </div>
              <img className='w-8 h-8' src="https://img.icons8.com/external-thin-kawalan-studio/50/external-arrow-up-right-arrows-thin-kawalan-studio.png" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">+ Add Project</button>
          <button className="border px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">Import Data</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
