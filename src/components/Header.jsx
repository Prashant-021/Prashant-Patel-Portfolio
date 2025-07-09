import React from 'react'
export const Header = () => {
    return (
        <div className='h-12'>
            <div className="logo">
                <p className='text-2xl font-logo-text'>
                    Prashant <span className='pr-0.5 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Patel</span>
                </p>
            </div>
            <div className="theme-toggle-btn">
            </div>
        </div>

    )
}
