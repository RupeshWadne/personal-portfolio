import React, { useEffect, useState} from 'react'
import { projectsData } from './Data'
import BlogItems from './BlogItems'

const Blogs = () => {
    const [item, setItem] = useState({ name: 'all'})
    const [projects, setProjects] = useState([])

    useEffect(() => {
        if(item.name === "all") {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name
            })
            setProjects(newProjects)
        }
    }, [item])
    return (
            <div className="work__container container grid">
                {projects.map((item) => {
                    return <BlogItems item={item} key={item.id} />
                })}
            </div>
    )
}

export default Blogs
