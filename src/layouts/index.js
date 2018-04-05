import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div className="has-navbar-fixed-top">
    <Helmet title="Revoice Labs | Welcome to the Voice Revolution">
      <link rel="shortcut icon" type="image/png" href='img/revoice_favicon.png' />
      <meta name="google-site-verification" content="19CJ-fmYyw3ccK84WSXNijid8U6mT8NykE3Oi8JUuTI" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
