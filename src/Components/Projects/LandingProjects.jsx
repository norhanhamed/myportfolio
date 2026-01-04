import React from 'react'
import { landingPageProjects } from '../../assets/Alldata'
import ProjectCard from '../ProjectCard'


function LandingProjects() {
    return (
        <>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {landingPageProjects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))}
            </div>

        </>
    )
}

export default LandingProjects
