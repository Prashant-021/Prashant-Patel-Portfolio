import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="flex justify-end gap-4 mb-4">
            <Link to="/">
                <button className="bg-off-white text-black hover:bg-gradient-to-r from-primary to-secondary hover:text-white px-4 py-2 rounded ">
                    Home
                </button>
            </Link>

            <Link to="/resume">
                <button className="bg-off-white text-black hover:bg-gradient-to-r from-primary to-secondary hover:text-white px-4 py-2 rounded ">
                    Resume
                </button>
            </Link>

            <Link to="/work">
                <button className="bg-off-white text-black hover:bg-gradient-to-r from-primary to-secondary hover:text-white px-4 py-2 rounded ">
                    Work
                </button>
            </Link>

            <Link to="/contact">
                <button className="bg-off-white text-black hover:bg-gradient-to-r from-primary to-secondary hover:text-white px-4 py-2 rounded ">
                    Contact
                </button>
            </Link>
        </nav>
    )
}
