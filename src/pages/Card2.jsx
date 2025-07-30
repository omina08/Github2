import React from 'react'

const Card2 = () => {
  return (
    <div>
            <div className="rounded-xl p-4 bg-[#f0f0f0] w-[400px]">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-semibold">Team Collaboration</h2>
          <button className="px-3 py-1 rounded-full border text-sm">+ New</button>
        </div>
        <div className="space-y-3 text-sm">
          <div className='flex gap-4'>
            <img className='w-10' src="https://img.freepik.com/premium-vector/character-avatar-isolated_729149-194801.jpg" alt="" />
        <div>
        <span className="font-medium text-lg">Alexandra Deff </span>
        <p className="text-gray-500 text-xs">Github Project Repoistory</p>
        </div>
          </div>


          <div className='flex gap-4'>
            <img className='w-10' src="https://img.freepik.com/premium-vector/character-avatar-isolated_729149-194801.jpg" alt="" />
        <div>
        <span className="font-medium text-lg">Edwin Adenike </span>
        <p className="text-gray-500 text-xs">Integrate User A.S</p>
        </div>
          </div>


          <div className='flex gap-4'>
            <img className='w-10' src="https://img.freepik.com/premium-vector/character-avatar-isolated_729149-194801.jpg" alt="" />
        <div>
        <span className="font-medium text-lg">Isaac Olewatemelarun </span>
        <p className="text-gray-500 text-xs">Github Project Repoistory</p>
        </div>
          </div>


          <div className='flex gap-4'>
            <img className='w-10' src="https://img.freepik.com/premium-vector/character-avatar-isolated_729149-194801.jpg" alt="" />
        <div>
        <span className="font-medium text-lg">David Owodi</span>
        <p className="text-gray-500 text-xs">Pesponsive layout for Homepage </p>
        </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card2
