import React from 'react'
import { educationProjects } from '../Alldata'
import ProjectCard from '../Components/ProjectCard'

function Education() {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {educationProjects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))}
            </div>
        </>
    )
}

export default Education
