import React from "react"
// import PropTypes from 'prop-types'
import { ServicesPageTemplate } from "../../templates/services-page"

const ServicePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return <ServicesPageTemplate services={data.services} />
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
