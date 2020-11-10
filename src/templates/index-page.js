import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

export const IndexPageTemplate = ({ image, name, location }) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150x",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(53,172,94) 0.5rem 0px 0px, rgb(53,172,94) -0.5rem 0px 0px",
            backgroundColor: "rgb(53,172,94)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {name}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(53,172,94) 0.5rem 0px 0px, rgb(53,172,94) -0.5rem 0px 0px",
            backgroundColor: "rgb(53,172,94)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {location}
        </h3>
      </div>
    </div>
    <section className="section ">
      <div className="container">
        <div className="content">
          <p>ds</p>
        </div>
      </div>
    </section>
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        name={frontmatter.name}
        scripture={frontmatter.scripture}
        deaconsTitle={frontmatter.deacons.title}
        deaconsImgs={frontmatter.deacons.images}
        location={frontmatter.location}
        about={frontmatter.about}
        image={frontmatter.image}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        name
        scripture
        about {
          text
          title
        }
        image
        deacons {
          title
          images {
            path
            name
          }
        }
        location
      }
    }
  }
`
