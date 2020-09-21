import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "projects",
    url: "/#projects",
  },
  {
    id: 3,
    text: "about",
    url: "/#about",
  },
  {
    id: 5,
    text: "contact",
    url: "/#contact",
  },
  {
    id: 6,
    text: "experience",
    url: "/#experience",
  },
]

// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass, toggleSideBar }) => {
  const handleToggle = () => {
    if (typeof toggleSideBar === "function") {
      toggleSideBar()
    }
  }
  const anchorLinks = data.map(link => {
    const { id, text, url } = link
    return (
      <li key={id}>
        <Link onClick={() => handleToggle()} to={url}>
          {text}
        </Link>
      </li>
    )
  })
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {anchorLinks}
    </ul>
  )
}
