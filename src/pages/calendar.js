import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
export const CalandarPageTemplate = ({}) => {
  return (
    <div className="container">
      <div className="section">
        <div className="tile is-ancestor">
          <div className="tile box">
            <div className="tile is-parent ">
              <iframe
                className="tile is-child  box"
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=bzM5bDhlNW83MjUzMjRja2J0ajRqcnZqYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E67C73"
                width="100%"
                frameBorder="0"
                style={{ border: 0, height: "75vh" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CalandarPage = () => {
  return (
    <Layout>
      <CalandarPageTemplate />
    </Layout>
  )
}

export default CalandarPage
