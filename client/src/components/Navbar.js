import React from "react"
import { FaAlignLeft } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSideBar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button
            onClick={() => toggleSideBar()}
            type="button"
            className="toggle-btn"
          >
            <FaAlignLeft />
          </button>
          <PageLinks styleClass="nav-links"></PageLinks>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
