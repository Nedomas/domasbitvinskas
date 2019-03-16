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
    <Container paddingTop={6} narrow>
      <Heading limited paddingBottom>
        Strategy & Growth
      </Heading>
      <Text level={2}>
        Just keep working on better startups while others scream how they are the best.
      </Text>
    </Container>
  </Container>
)
