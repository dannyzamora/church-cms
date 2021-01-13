import React from "react"

import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Deacons from "../components/Deacons"

import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

export const IndexPageTemplate = ({
  image,
  name,
  location,
  aboutTitle,
  aboutText,
  priest,
  scripture,
}) => (
  <div>
    <div
      className="full-width-image mt-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom`,
        backgroundAttachment: `fixed`,
        height: "35vh",
      }}
    >
      <div
        className="container"
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
          className="has-text-weight-bold is-size-5-mobile is-size-3-tablet has-text-centered has-text-white-ter "
          style={{
            boxShadow:
              "rgb(22, 43, 50) 0.5rem 0px 0px, rgb(22, 43, 50) -0.5rem 0px 0px",
            backgroundColor: "rgb(22, 43, 50)",

            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {name}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered has-text-white-ter divider"
          style={{
            boxShadow:
              "rgb(22, 43, 50) 0.5rem 0px 0px, rgb(22, 43, 50) -0.5rem 0px 0px",
            backgroundColor: "rgb(22, 43, 50)",

            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {location}
        </h3>
      </div>
    </div>

    <section className="section">
      <div className="container">
        <div className="section">
          <div className="content">
            <div className="content">
              <div className="tile is-ancestor">
                <div className="tile is-vertical ">
                  <div className="tile is-12">
                    <div className="tile is-parent">
                      <article className="tile is-child box">
                        <h1 className="title">{aboutTitle}</h1>
                        <h4 className="subtitle">{aboutText}</h4>
                      </article>
                    </div>
                    <div className="tile is-parent is-3 ">
                      <div className="tile is-child box  ">
                        <div style={{ maxWidth: "240px", margin: "auto" }}>
                          <h1>{priest.title}</h1>
                          <figure>
                            <PreviewCompatibleImage imageInfo={priest.image} />
                          </figure>

                          <article>
                            <h6> {priest.name}</h6>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-parent ">
                    <article className="tile  is-child box has-text-centered">
                      <p className="subtitle">Upcoming Projects...</p>
                    </article>
                  </div>
                  <div className="tile is-parent ">
                    <article className="tile  is-child box has-text-centered">
                      <p className="subtitle">Finances ...</p>
                    </article>
                  </div>
                  <div className="tile is-parent ">
                    <article className="tile  is-child box has-text-centered">
                      <p className="subtitle">{scripture}</p>
                    </article>
                  </div>
                </div>
              </div>

              {/* <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child has-text-centered">
                        <p className="subtitle">{scripture}</p>
                      </article>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <div className="container">
      <div className="columns">
        <div className="column is-4">{jsx}</div>
      </div>
    </div> */}
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter.priest.images)
  return (
    <Layout>
      <IndexPageTemplate
        name={frontmatter.name}
        aboutTitle={frontmatter.about.title}
        aboutText={frontmatter.about.text}
        scripture={frontmatter.scripture}
        priest={frontmatter.priest}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        priest {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          name
        }
        location
      }
    }
  }
`
