import React from "react"
import { Link } from "gatsby"

import facebook from "../img/facebook.svg"
import youtube from "../img/youtube.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer hero-foot has-background-white-ter">
        <div className="content has-text-centered has-background-primary ">
          <div className="container has-background-primary has-text-white-ter">
            <div style={{ maxWidth: "100vw" }}>
              <section>
                <ul className="social-list">
                  <li>
                    <Link
                      to="https://www.facebook.com/Debre-Yibabe-Kulbi-Kidus-Gabriel-EOTC-100836661938961"
                      target="_blank"
                    >
                      <img src={facebook} alt="Facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.youtube.com/channel/UCVrHDi4yH-4kFNvQ5hodUNA/videos"
                      target="_blank"
                    >
                      <img src={youtube} alt="Youtube" />
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
