import React from "react"
import Title from "./Title"
import Project from "./Project"
const Projects = ({ projects, title }) => {
  return (
    <section id="projects" className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} {...project} index={index} />
        })}
      </div>
    </section>
  )
}

export default Projects
