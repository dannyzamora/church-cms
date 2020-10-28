import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

export const IndexPageTemplate = ({ name }) => <div>{name}</div>

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        name={frontmatter.name}
        scripture={frontmatter.scripture}
        deaconsTitle={frontmatter.deacons.title}
        deaconsImgs={frontmatter.deacons.images}
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
