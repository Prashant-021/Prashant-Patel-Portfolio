import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="flex gap-4 mb-4">
            <Link to="/">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Home
                </button>
            </Link>

            <Link to="/resume">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Resume
                </button>
            </Link>

            <Link to="/work">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Work
                </button>
            </Link>

            <Link to="/contact">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Contact
                </button>
            </Link>
        </nav>
    )
}
