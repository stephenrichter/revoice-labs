import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/revoice_logo.svg'

const Navbar = () => (
  <nav className="navbar is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Revoice Labs" style={{ width: '148px', maxHeight: '2.4rem' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-end has-text-weight-semibold">
        <Link className="navbar-item" to="/products">
          The Voice Revolution
        </Link>
        <Link className="navbar-item" to="/services">
          Services
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <div class="navbar-item">
          <a class="button is-danger is-outlined">Get Started</a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
