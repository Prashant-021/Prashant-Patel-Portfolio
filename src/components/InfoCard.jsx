import React from 'react'

const InfoCard = ({ data }) => {
    console.log(data);
    return (
        <div className='bg-primary-100 rounded-xl p-3 flex flex-col gap-2'>
            <p className='text-gray-500 text-xs'>
                {data.year}
            </p>
            <p className='font-bold text-sm'>
                {data.title}
            </p>
            <p className='text-sm'>
                {data.description}
            </p>
        </div>
    )
}

export default InfoCard