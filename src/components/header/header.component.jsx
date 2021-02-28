import React from 'react'

import './header.styles.scss'

import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const handleClick = (url) => history.push(url)

  return (
    <nav id="nav-bar">
      <div className="logo-container">
        <h1
          className="logo"
          onClick={() => {
            handleClick('/')
          }}
        >
          M
        </h1>
      </div>
      <div className="links-container">
        <button
          onClick={() => {
            handleClick('/')
          }}
          name="about"
          className="header-btn clickable-color color-hover"
        >
          Home
        </button>
        <button
          onClick={() => {
            handleClick('/about')
          }}
          name="about"
          className="header-btn clickable-color color-hover"
        >
          About
        </button>
        <button
          onClick={() => {
            handleClick('/projects')
          }}
          name="projects"
          className="header-btn clickable-color color-hover"
        >
          Projects
        </button>
        <button
          onClick={() => {
            handleClick('/contact')
          }}
          name="contact"
          className="header-btn clickable-color color-hover"
        >
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Header
