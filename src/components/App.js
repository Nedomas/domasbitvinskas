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
import Publications from './Publications'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <Container>
        <Meta />
        <VideoBackground />

        <Container padding={isSmall(this) ? 1 : 4} paddingTop={2}>
          <Splash />
          <ProjectsList />
          <Publications />
          <TechSide />
          <Contact />
        </Container>
      </Container>
    )
  }
}

export default windowSize(App)
