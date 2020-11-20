import React from "react"

import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Deacons from "../components/Deacons"

export const IndexPageTemplate = ({
  image,
  name,
  location,
  aboutTitle,
  aboutText,
  deacons,
  scripture,
}) => (
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

    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="content">
              <div className="content">
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <h1 className="title">{aboutTitle}</h1>
                        <h4 className="subtitle">{aboutText}</h4>
                      </article>
                    </div>
                  </div>
                </div>
              </div>

              <Deacons deacons={deacons} />

              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child has-text-centered">
                        <p className="subtitle">{scripture}</p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="columns">
        <div className="column is-4">{jsx}</div>
      </div>
    </div>
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        name={frontmatter.name}
        aboutTitle={frontmatter.about.title}
        aboutText={frontmatter.about.text}
        scripture={frontmatter.scripture}
        deacons={frontmatter.deacons}
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
        deacons {
          title
          images {
            path {
              childImageSharp {
                fluid(maxWidth: 240, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
            name
          }
        }
        location
      }
    }
  }
`
const jsx = (
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
        <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
)
