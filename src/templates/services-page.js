import React from "react"

import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Deacons from "../components/Deacons"

// export const IndexPageTemplate = (
// )

export const ServicesPageTemplate = () => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light"></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesPage = () => {
  return (
    <Layout>
      {/* <ServicesPageTemplate
        name={frontmatter.name}
        aboutTitle={frontmatter.about.title}
        aboutText={frontmatter.about.text}
        scripture={frontmatter.scripture}
        deacons={frontmatter.deacons}
        location={frontmatter.location}
        about={frontmatter.about}
        image={frontmatter.image}
      /> */}
    </Layout>
  )
}

export default ServicesPage
