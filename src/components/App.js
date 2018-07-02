import React, { Component } from 'react'
import {
  Container,
  isSmall,
} from 'candour'
import windowSize from 'react-window-size'

import Meta from './Meta'
import VideoBackground from './VideoBackground'
import Splash from './Splash'
import ProjectsList from './ProjectsList'
import TechSide from './TechSide'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <Container>
        <Meta />
        <VideoBackground />

        <Container pad={isSmall(this) ? 2 : 4} padTop={2}>
          <Splash />
          <ProjectsList />
          <TechSide />
          <Contact />
        </Container>
      </Container>
    )
  }
}

export default windowSize(App)
