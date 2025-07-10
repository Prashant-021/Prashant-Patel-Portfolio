import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

export const Navbar = () => {
    const location = useLocation()

    const navItems = [
        { to: '/', icon: <AiOutlineHome className='m-auto h-6 w-6 mb-1' />, label: 'Home' },
        { to: '/resume', icon: <IoDocumentOutline className='m-auto h-6 w-6 mb-1' />, label: 'Resume' },
        { to: '/work', icon: <MdOutlineWorkOutline className='m-auto h-6 w-6 mb-1' />, label: 'Work' },
        { to: '/contact', icon: <BiSolidContact className='m-auto h-6 w-6 mb-1' />, label: 'Contact' },
    ];

    return (
        <nav className="flex flex-wrap justify-between md:justify-end gap-4 mb-4">
            {navItems.map(navItem => {
                const isActive = location.pathname === navItem.to;
                const baseStyle = "cursor-pointer w-20 h-20 text-xs px-4 py-2 rounded-xl";
                const activeStyle = "bg-gradient-to-r from-primary to-secondary text-white";
                const inactiveStyle = "bg-off-white text-black hover:bg-gradient-to-r from-primary to-secondary hover:text-white";
                return (
                    <Link to={navItem.to} key={navItem.label}>
                        <button className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
                            {navItem.icon}
                            {navItem.label}
                        </button>
                    </Link>
                )
            })}
        </nav>
    )
}
