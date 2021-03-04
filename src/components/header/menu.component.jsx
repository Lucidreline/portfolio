import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = ({ close }) => {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink onClick={close} activeClassName="current" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeClassName="current" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeClassName="current" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeClassName="current" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu
