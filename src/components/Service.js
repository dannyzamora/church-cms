import React from "react"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
const Service = ({ name, text }) => (
  <div className="tile ">
    <div className="tile is-parent ">
      <article className="tile is-child is-success box">
        <p className="title">{name}</p>
        <div className="content ">
          <p>{text}</p>
        </div>
      </article>
    </div>
  </div>
)
export default Service
