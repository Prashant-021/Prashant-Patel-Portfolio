import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { meta } from '@eslint/js';

const ContactForm = () => {

    const [isLoading, setIsloading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmit = (e) => {
        setIsloading(true)
        e.preventDefault();
        console.log('Submitted:', formData);
        // Add API call or form handling here
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log('Email sent!', result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.error('Email sending failed:', error.text);
                alert('Failed to send email. Try again later.');
            }).finally(() => {
                setIsloading(false)
                e.target.reset(); // reset form fields
            });

    };

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name  <sup className='text-red-500'>*</sup></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email <sup className='text-red-500'>*</sup></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium">Message  <sup className='text-red-500'>*</sup></label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                    />
                </div>

                <button
                    id='submitBtn'
                    type="submit"
                    className={`border-1 border-primary cursor-pointer px-6 py-2 rounded-4xl  transition duration-300 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : ""} hover:bg-gradient-to-r from-primary to-secondary transition duration-300 hover:text-white`}
                    disabled={isLoading}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
