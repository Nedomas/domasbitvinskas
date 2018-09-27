import React from 'react'
import {
  Heading,
  Container,
  Text,
  Button,
} from 'candour'

import TechnologiesList from './TechnologiesList'

export default () => (
  <Container paddingTop={2} paddingBottom={4} limited>
    <Heading level={2}>
      Tech Side
    </Heading>
    <Text level={3} limited paddingBottom>
      10+ years developing websites and apps with the most promising tech.
      Here are my <Text level={3} fontWeight600 displayInline>4 bets</Text> on
      technologies that I will continue to work with in the future.
    </Text>

    <TechnologiesList />

    <Container displayFlex flexWrapWrap paddingTop={2} alignItemsCenter>
      <Button marginRight level={2} component='a' href='https://media.graphcms.com/ZOAXCxzMSEiKzCudF4Wk' target='_blank'>
        Professional CV
      </Button>
      <Text paddingTop paddingBottom narrow>
        If you'd like to have me in your team as a <Text fontWeight600 displayInline>CTO</Text> or <Text fontWeight600 displayInline>VP of Engineering</Text>
      </Text>
    </Container>
  </Container>
)
