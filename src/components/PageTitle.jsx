import React from 'react'

const PageTitle = ({ title }) => {
    return (
        <div className='flex flex-col lg:flex-row items-center gap-5'>
            <h2 className='text-4xl tracking-wider'>
                {title}
            </h2>
            <div className='max-w-[80%] w-sm h-0.5 bg-gradient-to-r from-primary to-secondary '>
            </div>
        </div>
    )
}

export default PageTitle