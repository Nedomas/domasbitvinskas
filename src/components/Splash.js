import React from 'react'
import {
  Headline,
  Container,
  Text,
} from 'candour'

export default () => (
  <Container>
    <Headline level={4} uppercase bold>
      Domas Bitvinskas
    </Headline>
    <Container padTop={4} narrow>
      <Headline bold limited>
        Maker <br/>& Startup Fanatic
      </Headline>
      <Text level={2}>
        Just keep running better & better startups while others scream about how they are the best.
      </Text>
    </Container>
  </Container>
)
