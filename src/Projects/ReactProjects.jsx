import React from 'react'
import { reactProjects } from '../Alldata'
import ProjectCard from '../Components/ProjectCard'

function ReactProjects() {
    return (
        <>
        
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reactProjects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))}
            </div>
        </>
    )
}

export default ReactProjects
