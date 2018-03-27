import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

import github from '../img/github-icon.svg'
import logo from '../img/revoice_logo.svg'

const NavMenu = styled.nav`
  box-shadow: 0 1px 2px 0 rgba(36,40,45,.15);
`

export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  toggle() {
    this.setState({
      open: !(this.state && this.state.open)
    })
  }

  render() {
    return (
      <NavMenu className='navbar is-fixed-top' role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Revoice Labs" style={{ width: '148px', maxHeight: '2.4rem' }} />
              </figure>
            </Link>

            <div className="navbar-burger" onClick={() => this.toggle()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={this.state.open ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end has-text-weight-semibold has-text-centered">
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
              <div className="navbar-item">
                <a className="button is-danger is-outlined">Let's Talk</a>
              </div>
            </div>
          </div>
        </div>
      </NavMenu>
    )
  }
}
