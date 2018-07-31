import React from 'react'
import {
  Headline,
  Container,
  Text,
  Button,
} from 'candour'

import TechnologiesList from './TechnologiesList'

export default () => (
  <Container paddingTop={2} paddingBottom={4} limited>
    <Headline level={2} bold>
      Tech Side
    </Headline>
    <Text level={3} limited paddingBottom>
      10+ years developing websites and apps with the most promising tech.
      Here are my <Text level={3} bold inline>4 bets</Text> on
      technologies that I will continue to work with in the future.
    </Text>

    <TechnologiesList />

    <Container flex paddingTop={2} alignItemsCenter wrap>
      <Button marginRight level={2} component='a' href='https://media.graphcms.com/ZOAXCxzMSEiKzCudF4Wk' target='_blank' bold>
        Professional CV
      </Button>
      <Text paddingTop paddingBottom narrow>
        If you'd like to have me in your team as a <Text bold inline>CTO</Text> or <Text bold inline>VP of Engineering</Text>
      </Text>
    </Container>
  </Container>
)
