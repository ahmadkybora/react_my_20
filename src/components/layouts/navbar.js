import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Search } from '../../utils/tools';

const Navbar = () => {
    const fullName = localStorage.getItem("fullName")
    return (
      <div className=''>
        <nav className='bg-gray-100 grid grid-cols-4'>

          <div className='flex justify-start'>
            <div className='py-4'>
              <NavLink to="/" className='border-green-300 border-2 hover:bg-green-300 rounded-full py-2 px-3 text-xs uppercase font-bold cursor-pointer tracking-wider mr-2'>Home</NavLink>
              <NavLink to="/contact" className='border-green-300 border-2 hover:bg-green-300 rounded-full py-2 px-3 text-xs uppercase font-bold cursor-pointer tracking-wider'>Contact</NavLink>
            </div>
          </div>

          <div className='flex justify-center col-span-2'>
            <div className='pt-4'>
              <Search 
                onSubmit={null} 
                type="" 
                name="" 
                className="w-96 h-8 rounded" 
                id="" 
                value="" 
                placeholder="" 
                style={null} 
              />
            </div>
          </div>

          <div className='flex justify-end py-4'>
            { !fullName && (
              <React.Fragment>
                <NavLink to="/Register" className='bg-green-300 rounded-full py-2 px-3 text-xs uppercase font-bold cursor-pointer tracking-wide'>Register</NavLink>
                <NavLink to="/login" className='bg-green-300 rounded-full py-2 px-3 text-xs uppercase font-bold cursor-pointer tracking-wide ml-2'>Login</NavLink>
              </React.Fragment>
            )}
            { fullName && (
              <React.Fragment>
                <p className='py-1 mr-2'>{fullName}</p>
                <NavLink to="/logout" className='border-red-300 border-2 hover:bg-red-300 rounded-full py-2 px-3 text-xs uppercase font-bold cursor-pointer tracking-wide'>Logout</NavLink>
              </React.Fragment>
            )}
          </div>


        </nav>
      </div>
    )
}

export default Navbar;