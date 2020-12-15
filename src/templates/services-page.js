import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import Service from "../components/Service"

// export const IndexPageTemplate = (
// )

export const ServicesPageTemplate = ({ services }) => {
  return (
    <div className="container">
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

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <ServicesPageTemplate services={frontmatter.services} />
    </Layout>
  )
}

export default ServicesPage

export const pageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        services {
          name
          text
        }
      }
    }
  }
`
