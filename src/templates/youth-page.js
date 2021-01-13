import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import Service from "../components/Service"

// export const IndexPageTemplate = (
// )

export const YouthPageTemplate = ({ services }) => {
  return (
    <div className="container ">
      <div className="section">
        <div className="tile is-ancestor is-vertical">
          {services.map(service => (
            <Service name={service.name} text={service.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Page = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <YouthPageTemplate services={frontmatter.services} />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query YouthPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "youth-page" } }) {
      frontmatter {
        services {
          name
          text
        }
      }
    }
  }
`
