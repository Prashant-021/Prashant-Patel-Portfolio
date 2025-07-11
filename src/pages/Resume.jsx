import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";

import PageTitle from '../components/PageTitle'
import InfoCard from '../components/InfoCard'
import SkillList from '../components/SkillList';

const Resume = () => {
  return (
    <div className='p-5'>
      <PageTitle title={"Resume"} />
      <div className="mt-5 grid md:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <GiGraduateCap className='h-7 w-7 text-primary' />
            <h2 className='text-3xl'>Education</h2>
          </div>
          <div className='mt-5 flex flex-col gap-5'>
            <InfoCard data={{ year: "2019/07-2023/05", title: "BTECH IT", description: "Devang Patel Institute of Advance Technology and Research, Charusat University" }} />
            {/* <InfoCard data={{ year: "2019-2023", title: "BTECH IT", description: "Devang Patel Institute of Advance Technology and Research, Charusat University" }} /> */}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <MdWork className='h-7 w-7 text-primary' />
            <h2 className='text-3xl'>Experience</h2>
          </div>
          <div className='mt-5 flex flex-col gap-5'>
            <InfoCard data={{ year: "2023/07-Present", title: "Software Engineer", description: "iView Labs Pvt. Ltd." }} />
            <InfoCard data={{ year: "2023/01-2023/06", title: "Front-End Developer (Intern)", description: "Simform Solutions" }} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className='text-3xl'>Work Skills</h2>
          </div>
          <SkillList skills={["React.js", "HTML", "CSS", "Redux-Toolkit", "JavaScript", "Tailwind CSS", "Bootstrap", "Python", "Fast API", "Git", "GitHub"]} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className='text-3xl'>Soft Skills</h2>
          </div>
          <SkillList skills={["Problem Solving", "Communication Skills", "Team Collaboration", "Time Management"]} />
        </div>
      </div>
    </div>
  )
}

export default Resume