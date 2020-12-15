import React from "react"
// import PropTypes from 'prop-types'
import { ServicesPageTemplate } from "../../templates/services-page"

const ServicePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(data)
  if (data) {
    return <ServicesPageTemplate />
  } else {
    return <div>Loading...</div>
  }
}

// IndexPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   getAsset: PropTypes.func,
// }

export default ServicePagePreview
