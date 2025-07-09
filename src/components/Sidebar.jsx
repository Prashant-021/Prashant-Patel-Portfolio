import React from 'react'
import SocialIcons from './SocialIcons'

export const Sidebar = () => {
    return (
        <div className='bg-white p-6 rounded-xl text-center'>
            <h1>Prashant Patel</h1>
            <p>Front-End Developer</p>
            <SocialIcons />
            <div className="contactInfo">
                <div className="phone-box">
                
                </div>
            </div>
        </div>
    )
}
