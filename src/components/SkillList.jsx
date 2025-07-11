import React from 'react'

const SkillList = ({ skills }) => {
    return (
        <div className='mt-5 flex flex-wrap gap-2'>
            {
                skills.map((skill, index) => {
                    return (
                        <div key={index} className='bg-secondary-background p-3 rounded-xl'>
                            <p>{skill}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SkillList