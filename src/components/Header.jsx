import React from 'react'
import { FaBars } from 'react-icons/fa'

export const Header = ({ toggleSidebar }) => {
    return (
        <div className='h-12 flex justify-between'>
            <div className="logo">
                <p className='text-2xl font-logo-text'>
                    Prashant <span className='pr-0.5 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Patel</span>
                </p>
            </div>
            <div className="md:hidden">
                <button onClick={toggleSidebar}>
                    <FaBars className="text-2xl text-primary" />
                </button>
            </div>
        </div>

    )
}
