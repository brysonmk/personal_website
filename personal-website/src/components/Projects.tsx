import ProjectCard from "./ProjectCard"

export default function Projects(){
    return (
        <div>
            <div className="text-3xl font-bold">Projects</div>
            <div id="Projects:">
                <ProjectCard name="project 1"/>
                <ProjectCard name="project 2"/>
                <ProjectCard name="project 3"/>
                <ProjectCard name="project 4"/>
                <ProjectCard name="project 1"/>
                <ProjectCard name="project 2"/>
                <ProjectCard name="project 3"/>
                <ProjectCard name="project 4"/>
            </div>
        </div>
    )
}