import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            title: 'home'
        },
        {
            id: 2,
            title: 'about'
        },
        {
            id: 3,
            title: 'portfolio'
        }, {
            id: 4,
            title: 'contact'
        }

    ]
    return (
        <div className='flex justify-between px-4 items-center bg-black text-white w-full h-20'>
            <div className='text-3xl font-bold ml-2'>ADITYA</div>
            <ul className='hidden md:flex'>
                {links.map((data) => (
                    <li key={data.id} className='text-2xl  px-4 capitalize cursor-pointer text-gray-500 hover:scale-105 duration-200'>{data.title}</li>

                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
                {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
            </div>
            {nav && <ul className='flex flex-col items-center justify-center absolute top-0 left-0 f-full h-screen bg-black'>
                {links.map((data) => (
                    <li key={data.id} className='text-2xl  py-4 capitalize cursor-pointer text-gray-500 hover:scale-105 duration-200'>{data.title}</li>

                ))}
            </ul>}


        </div>
    )
}
