import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className='p-5'><PageTitle title={"Contact"} />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-primary-100 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className='h-6 w-6 text-primary' />
            <h4 className='text-2xl font-medium'>
              Phone:
            </h4>
          </div>
          <a href="tel:+918080437222">
            <p className='mt-1.5'>+91 8980437222</p>
          </a>
        </div>
        <div className="bg-primary-100 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <MdEmail className='h-6 w-6 text-primary' />
            <h4 className='text-2xl font-medium'>
              Email:
            </h4>
          </div>
          <a href="mailto:pspatel021@gmail.com">
            <p className='mt-1.5'>pspatel021@gmail.com</p>
          </a>
        </div>
        <div className='col-span-2 bg-secondary-background rounded-xl p-4'>
          <p className='text-'>I am always open to discussing <span className='font-bold'>new projects</span>, <span className='font-bold'>opportunities in tech world </span>and
            <span className='font-bold'> partnerships</span>. </p>
          <ContactForm />
        </div>
      </div>
    </div >
  )
}

export default Contact