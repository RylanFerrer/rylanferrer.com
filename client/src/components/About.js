import React from "react"
import Title from "./Title"
import Avatar from "../assets/Images/avatar.svg"

const About = () => {
  return (
    <section id="about" className="section ">
      <Title title="About" />
      <div className="about">
        <img className="about__avatar" src={Avatar} alt="Rylan Avatar" />
        <div className="about__blob-left"></div>
        <div className="about__blob-right"></div>
        <p className="about__description">
          Hello! I'm Rylan software engineer based in Vancouver, Canada skilled
          in Node.js, React.js, AWS, and full-stack web development. Currently I
          am working as a junior software engineer @ Aquanow. I am passionate
          and always eager to learn new technologies and meet new people.If you
          would like to connect please submit a message below or contact me on
          LinkedIn!
        </p>
      </div>
    </section>
  )
}

export default About
