import React from 'react'
import SocialIcons from './SocialIcons'
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";

import profile_picture from "../assets/Profile_picture.png"


export const Sidebar = () => {
    const iconStyle = "h-6 w-6 text-primary";
    const dividerStyle = "text-gray-200"
    return (
        <div className='bg-white p-6 rounded-xl text-center flex flex-col gap-2.5 '>
            <img src={profile_picture} alt="" height={200} width={200} className='h-52 w-52 m-auto rounded-xl overflow-hidden md:mt-[-25%] mt-0' />
            <h1 className='text-3xl font-bold'>Prashant Patel</h1>
            <p className='text-gray-400'>Full-Stack Developer</p>
            <SocialIcons />
            <div className="contactInfo m-3 bg-secondary-background rounded-xl p-6">
                <div className='flex items-center w-full gap-2 my-2'>
                    <IoMdPhonePortrait className={iconStyle} />
                    <div className='text-left'>
                        <p className=' text-sm text-gray-400'>Phone</p>
                        <a href="tel:+918080437222">
                            <p className='text-sm'>+91 8980437222</p>
                        </a>
                    </div>
                </div>
                <hr className={dividerStyle} />
                <div className='flex items-center w-full gap-2 my-2'>
                    <MdOutlineEmail className={iconStyle} />
                    <div className='text-left'>
                        <p className=' text-sm text-gray-400'>Email</p>
                        <a href="mailto:pspatel021@gmail.com">
                            <p className='text-sm'>pspatel021@gmail.com</p>
                        </a>
                    </div>
                </div>
                <hr className={dividerStyle} />
                <div className='flex items-center w-full gap-2 my-2'>
                    <CiLocationOn className={iconStyle} />
                    <div className='text-left'>
                        <p className=' text-sm text-gray-400'>Location</p>
                        <p className='text-sm'>Gujarat, India</p>
                    </div>
                </div>
                <hr className={dividerStyle} />
                <div className='mt-4 mb-2'>
                    <a
                        href="https://drive.google.com/file/d/1_8bW-5odZ3pdT2fe4fQogoOYy7eQzXuU/view?usp=sharing"  // Update this path to your actual resume file
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className='cursor-pointer flex gap-1.5 items-center m-auto px-6 py-2 rounded-[50px] text-white bg-gradient-to-r from-primary to-secondary'>
                            <FiDownload />
                            Download Resume
                        </button>
                    </a>
                </div>

            </div>
        </div>
    )
}
