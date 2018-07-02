import React from 'react'
import {
  Headline,
  Container,
  Text,
  Button,
} from 'candour'

import TechnologiesList from './TechnologiesList'

export default () => (
  <Container padTop={2} padBottom={4} limited>
    <Headline level={2} bold>
      Tech Side
    </Headline>
    <Text level={3} limited padBottom>
      10+ years developing websites and apps with the most promising tech.
      Here are my <Text level={3} bold inline>4 bets</Text> on
      technologies that I will continue to work with in the future.
    </Text>

    <TechnologiesList />

    <Container flex padTop={2} alignItemsCenter wrap>
      <Button marginRight level={2} component='a' href='/domasbitvinskas.pdf' target='_blank' bold>
        Professional CV
      </Button>
      <Text padTop padBottom narrow>
        If you'd like to have me in your team as a <Text bold inline>CTO</Text> or <Text bold inline>VP of Engineering</Text>
      </Text>
    </Container>
  </Container>
)
