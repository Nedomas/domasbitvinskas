import React from 'react'
import {
  Heading,
  Container,
  Text,
} from 'candour'

export default () => (
  <Container>
    <Heading level={4} textTransformUppercase fontWeight600>
      Domas Bitvinskas
    </Heading>
    <Container paddingTop={4} narrow>
      <Heading limited>
        Maker <br/>& Startup Fanatic
      </Heading>
      <Text level={2}>
        Just keep running better & better startups while others scream about how they are the best.
      </Text>
    </Container>
  </Container>
)
