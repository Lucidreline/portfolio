import React from 'react'

import './App.scss'

import SideLinks from './components/side-links/side-links.component'

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
import PageNotFound from './components/sections/page-not-found/page-not-found.component'
AOS.init()

function App()
{
  return (
    <div className="App">
      <div id="margin-container">
        <div data-aos="fade-right">
          <Header />
        </div>
        <div data-aos="fade-up">
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </div>
        <SideLinks className='side-links' />
      </div>
    </div>
  )
}

export default App
