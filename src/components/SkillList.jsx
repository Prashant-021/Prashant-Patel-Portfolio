import React from 'react'
import SkillTag from './SkillTag'

const SkillList = ({ skills }) => {
    return (
        <div className='mt-5 flex flex-wrap gap-2'>
            {
                skills.map((skill, index) => {
                    return (
                        <SkillTag skill={skill} index={index} key={index} />
                    )
                })
            }
        </div>
    )
}

export default SkillList