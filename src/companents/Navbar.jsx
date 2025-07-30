import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm mt-[10px]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="w-12 h-10 bg-gray-300 rounded-lg" src="/logo.jpg" alt="logo" />
          <span className="text-lg font-semibold"> <Link to={'/donezo'} >Donezo</Link></span>
        </div>

        {/* Search */}
        <div className="flex items-center bg-white px-3 py-1 rounded-lg shadow-inner w-1/3">
          <img className="w-5 h-5 rounded" src="https://img.icons8.com/ios/50/search.png" alt="search" />
          <input type="text" placeholder="Search task" className="ml-2 w-full outline-none text-sm" />
          <div className="text-xs text-gray-400 px-2 py-0.5 bg-gray-100 rounded">F</div>
        </div>

        {/* Icons + Avatar */}
        <div className="flex items-center space-x-4">
          <img className="w-9 h-9 rounded-full bg-gray-300 p-2" src="https://img.icons8.com/ios/50/new-post.png" alt="mail" />
          <img className="w-9 h-9 rounded-full bg-gray-300" src="https://img.icons8.com/carbon-copy/100/bell--v1.png" alt="bell" />
          <div className="flex items-center space-x-2">
            <img
              className="w-12 h-12 bg-pink-300 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAqe5vlEv-UaxkHoCvryEkwPiJLIH_rjXww&s"
              alt="avatar"
            />
            <div className="text-sm leading-tight">
              <div className="font-medium">Totok Michael</div>
              <div className="text-gray-400 text-xs">tmichael20@mail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

