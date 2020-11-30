import React from "react"
import Img from "gatsby-image"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" }
  const { alt = "", childImageSharp, path } = imageInfo
  if (!!path && !!path.childImageSharp) {
    console.log("HELLO")
    return (
      <Img style={imageStyle} fluid={path.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!path && typeof path === "string")
    return <img style={imageStyle} src={path} alt={alt} />

  return null
}

export default PreviewCompatibleImage
