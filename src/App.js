import React from 'react'

import './App.scss'

// components
import Header from './components/header/header.component'
import Hero from './components/sections/hero/hero.component'
import AboutMe from './components/sections/about-me/about-me.component'
import Projects from './components/sections/projects/projects.component'
import Contact from './components/sections/contact/contact.component'

// animations
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Switch, Route } from 'react-router-dom'
AOS.init()

function App() {
  return (
    <div className="App">
      <div id="margin-container">
      <div data-aos="fade-right">
        <Header />
      </div>
        <div data-aos="fade-up-right">
        <Switch>
          <Route exact to="/" component={Hero}/>
          <Route to="/" component={Projects}/>
          <Route to="/" component={AboutMe}/>
          <Route to="/" component={Contact}/>
        </Switch>
        </div>
        
      </div>
    </div>
  )
}

export default App
