import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "Default title"}</h2>
      <div className="underline" />
    </div>
  )
}

export default Title
