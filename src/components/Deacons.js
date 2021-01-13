import React from "react"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
const Deacons = ({ deacons }) => (
  <div>
    <div>
      <h3 className="has-text-weight-semibold ">{deacons.title}</h3>
    </div>
    <div className="columns is-multiline">
      {deacons.images.map(image => (
        <div key={image.name} className="column ">
          <div className="card">
            <div className="card-image  ">
              <figure className="image">
                <PreviewCompatibleImage imageInfo={image} />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <p>{image.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Deacons
