import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'


const Navbar = () => {

  const {currentUser } = useContext(AuthContext)
  return (
    <div>
        
<div className="bg-white">
  <div className="border py-3 px-6">
    <div className="flex justify-between">
      <div className="flex items-center">
      
        <Link className="ml-2 font-bold text-black  text-2xl" to={`/`}>BLOGLAND"</Link>
        
       
      </div>

      <div className="ml-5 flex flex-1 gap-x-3">
        

        <input type="text" className="w-full rounded-md border border-[#DDE2E4] px-2 py-1 text-sm"  placeholder="search on blogland "  />
      </div>

      <div className="ml-2 flex">
          
        
        <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
        <Link to="/login">
            <button className="text-sm font-medium">Sign in</button>
            </Link>

        </div>

            <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
        <Link to="/login">
            <button className="text-sm font-medium">Log out</button>
            </Link>
        </div>
        <img className="w-10 h-10 rounded ml-2" src="https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Default avatar"/>
        <span>{currentUser?.username}</span>
      </div>
    </div>

    <div className="mt-4 flex items-center justify-between">
     

      <div className="flex gap-x-8">
        

      <Link className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100" to="/?books">Books</Link>
        <Link className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100" to="/?computers">Computers</Link>
        <Link className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100" to="/?fashion">Fashion</Link>
        <Link className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100" to="/?health">Health</Link>
        <Link className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100" to="/?pharmacy">Pharmacy</Link>
        <Link className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100" to="/?photos">Photos</Link>
        <Link className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"to="/?travel">Travel</Link>
        <Link className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100" to="/?food">Food</Link>
        <Link className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100" to="/?music">Music</Link>
      </div>
      <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="red">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"  />
          </svg>
          <Link className="text-sm font-medium" to="/"> My Favorites</Link>
        </div>

      <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
      
          <Link className="text-sm font-mediumm" to ="/edit">Write</Link>
          
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar