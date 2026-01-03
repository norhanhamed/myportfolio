import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <>
            <div
                className="bg-[#111111] rounded-2xl border border-[#FF9F1C]/40 overflow-hidden transition duration-300 hover:shadow-[0_0_30px_rgba(255,159,28,0.25)]">
                {/* Image */}
                <div className="h-52 overflow-hidden">
                    <img src={project.bgImage} alt={project.title} className="w-full h-full  object-cover" />
                </div>
                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5"> {project.description}</p>
                    {/* Buttons */}
                    <div className="flex gap-4">
                        <a
                            href={project.demo_link}
                            target="_blank"
                            className=" px-4 py-2 text-sm rounded-lg bg-[#FF9F1C] text-black font-medium">
                            Live Demo
                        </a>
                        <a
                            href={project.git_link}
                            target="_blank"
                            className=" px-4 py-2 text-sm rounded-lg border border-gray-500 text-gray-300 hover:text-white hover:border-white transition " >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectCard
