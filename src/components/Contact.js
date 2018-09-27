import React from 'react'
import {
  Heading,
  Container,
  Text,
  Button,
} from 'candour'

export default () => (
  <Container paddingTop={4} limited paddingBottom={6}>
    <Heading level={2}>
      How to reach me
    </Heading>
    <Text level={3} paddingBottom>
      Love to connect with people who have a growth mindset.
      <br/>
      I advise early-stage startups on growth, tech and business.
      You can also hire me to speak at your event on growth hacking & open-source.
    </Text>
    <Container displayFlex flexWrapWrap>
      <Button component='a' marginRight marginBottom href='https://www.linkedin.com/in/domasbitvinskas' target='_blank'>
        Connect on LinkedIn
      </Button>
      <Button component='a' href='mailto:domas.bitvinskas@me.com'>
        Email me
      </Button>
    </Container>
  </Container>
)
