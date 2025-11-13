import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
const projects = [
  {
    id: 1,
    title: "Secure Response Strategies",
    category: "Web Development",
    link: "https://www.secureresponsestrategies.com/",
    company: "",
    description: "I designed and developed the official website for Secure Response Strategies, a professional security consulting firm. The site features a clean, responsive, and service-focused design that highlights the company’s expertise in security assessments, emergency planning, and active-threat training. I focused on creating a trustworthy and user-friendly experience with clear calls to action, intuitive navigation, and well-structured content that effectively communicates the brand’s credibility and professionalism.",
    techStack: ["Wix", "Velo"],
    image: ""
  },
  {
    id: 1,
    title: "i-hear",
    category: "Web Development",
    link: "https://hiyadigital12.wixstudio.com/i-hear",
    company: "",
    description: "I designed and developed the website for i-Hear, a hearing-aid e-commerce platform built on Wix Studio. The site highlights product categories, detailed how-it-works and care sections, and clearly guides users from hearing awareness to purchasing suitable devices — all delivered through a clean, accessible, and conversion-focused layout.",
    techStack: ["Wix", "Velo"],
    image: ""
  },
  {
    id: 1,
    title: "Learning Platform",
    category: "Web Development",
    link: "",
    company: "iView Labs Pvt. Ltd",
    description: "As the global DevOps and Agile industry body, This Learning Platform empowers organizations to transform into high-performance digital organizations. It provides the guidance, training, and community support to help your teams improve efficiency, enhance agility, and deliver value continuously.",
    techStack: ["React.js", "Redux", "AntDesign"],
    image: ""
  }, {
    id: 2,
    title: "Job Portal",
    category: "Web Development",
    company: "iView Labs Pvt. Ltd",
    link: "",
    description: "This job portal is no ordinary recruitment platform and aims to reinvent the way businesses hire. Traditionally, jobs are posted, hundreds of candidates apply, you sift through a myriad of different CVs, and if you're lucky, you manage to get through the interviews and hire someone hoping they'll be a natural fit for your business.",
    techStack: ["React.js", "Redux", "Bootstrap"],
    image: ""
  }, {
    id: 3,
    title: "DSA Visualizer",
    category: "Web Development",
    description: "DSA Visualizer is a web application designed to help students learn Data Structures and Algorithms through interactive, step-by-step visualizations.",
    link: "https://boisterous-cassata-46122e.netlify.app/",
    techStack: ["React.js", "Redux", "Material UI"],
    image: ""
  }, {
    id: 4,
    title: "Brick and Block",
    category: "App Development",
    description: "Brick & Block Inventory Manager is a desktop application designed to streamline the tracking and management of bricks and blocks in manufacturing or construction settings. The app allows users to manage inventory, calculate the quantity of bricks and blocks produced, and maintain detailed records of stock movement. It also includes functionality to store provider details and automatically generate bills based on materials supplied, ensuring accurate accounting and smooth operations.",
    link: "https://github.com/Prashant-021/Brick-and-Block-Management",
    techStack: ["Python", "PyQt5", "sqlite"],
    image: ""
  }
]
const Work = () => {
  const [projectList, setProjectList] = useState(projects)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categoryList = ['All', ...new Set(projects.map(project => project.category))];

  const applyFilter = (category) => {
    const filteredProjects = category === 'All'
      ? projects
      : projects.filter(project => project.category === category);
    setSelectedCategory(category)
    setProjectList(filteredProjects)
  }
  return (
    <div className='p-5'>
      <PageTitle title={"Portfolio"} />
      <div className='mt-5 flex flex-wrap md:justify-end gap-4'>
        {categoryList.map((category, index) => {
          return (
            <button key={index} className={`p-1 cursor-pointer rounded-xl ${selectedCategory === category ? "text-primary" : ""}`} onClick={() => applyFilter(category)}>{category}</button>
          )
        })}
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectList.map(project => {
          return (
            <div key={project.id} className='bg-secondary-background p-5 rounded-xl flex flex-col gap-1.5'>
              {project.image && <img src={project?.image} alt="" />}
              <p className='text-sm text-gray-500'>{project.category}</p>
              <h3 className='font-bold'>{project.title}</h3>
              {project.company && <p className='text-sm'><strong>Company:</strong> {project.company}</p>}
              <p className='text-sm text-gray-500 line-clamp-3' title={project.description}>{project.description}</p>
              <p className='text-sm'>
                <strong>TechStack: </strong>
                {
                  project?.techStack?.join(", ")
                }
              </p>
              {project.link && <a href={project.link} rel="noopener noreferrer" target='_blank' >Link</a>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work