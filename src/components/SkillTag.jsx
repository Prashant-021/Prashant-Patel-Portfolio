import React from 'react'

const SkillTag = ({ index, skill }) => {
    return (
        <div key={index} className='bg-secondary-background p-3 rounded-xl'>
            <p>{skill}</p>
        </div>
    )
}

export default SkillTag