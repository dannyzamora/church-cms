import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

import "./all.sass"

const Layout = ({ children }) => {
  return (
    <div className="hero  is-fullheight">
      <Navbar />
      <div className="hero-body">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
