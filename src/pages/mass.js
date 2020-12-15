import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
export const MassPageTemplate = ({}) => {
  return (
    <div className="container">
      <div className="section">
        <div className="tile is-ancestor">
          <div className="tile box">
            <div className="tile is-parent is-8">
              <iframe
                className="tile is-child  box"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.6623725370712!2d-121.893611340037!3d37.34865498524636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc84df7d17a7%3A0x198bf428f4ebeac9!2sDykk%20Gabriel%20Eotc!5e1!3m2!1sen!2sus!4v1597895535499!5m2!1sen!2sus"
                width="100%"
                height="500"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
            <div className="tile is-parent is-4 is-vertical">
              <div className="tile is-child box">
                <table className="table is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>Days</th>
                      <th>Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sunday</td>
                      <td>5:30AM–1AM</td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Monday</td>
                      <td>5:30AM–1AM</td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Tuesday</td>
                      <td>5:30AM–1AM</td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Wednesday</td>
                      <td>5:30AM–1AM</td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Thursday</td>
                      <td>5:30AM–1AM</td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Friday</td>
                      <td>5:30AM–1AM</td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Saturday</td>
                      <td>5:30AM–1AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tile is-child box">
                <table className="table is-striped is-narrow is-hoverable is-fullwidth">
                  <tbody>
                    <tr>
                      <th>Address</th>
                      <td>San Jose, CA San Jose, CA</td>
                    </tr>
                    <tr>
                      <th>Number</th>
                      <td>(408) 444-4444</td>
                    </tr>
                    <tr>
                      <th>Head Priest</th>
                      <td>PUTA NAMEHERE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MassPage = () => {
  return (
    <Layout>
      <MassPageTemplate />
    </Layout>
  )
}

export default MassPage
