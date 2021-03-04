import React from 'react'
import Popup from 'reactjs-popup'
import BurgerIcon from './burger-icon.component'
import Menu from './menu.component'

import './header.styles.scss'

import { useHistory } from 'react-router-dom'

const contentStyle = {
  width: '80%',
  border: 'none',
}

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
        <div className="hamberger-container">
          <div>
            <Popup
              modal
              overlayStyle={{ background: 'rgba(24,24,24,0.98' }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={(open) => {
                return <BurgerIcon open={open} />
              }}
            >
              {(close) => <Menu close={close} />}
            </Popup>
          </div>
        </div>
        {/* <button
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
        </button> */}
      </div>
    </nav>
  )
}

export default Header
