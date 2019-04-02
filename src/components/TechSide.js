import React from 'react'
import moment from 'moment'
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
    <Text level={2} limited paddingBottom>
      {moment('2005-06-01').fromNow(true)} of experience developing websites and apps with the most promising tech.
      Here are my <Text level={2} fontWeight600 displayInline>4 bets</Text> on
      technologies that I will continue to work with in the future.
    </Text>

    <TechnologiesList />

    <Container displayFlex flexWrapWrap paddingTop={2} alignItemsCenter>
      <Button marginRight level={2} component='a' href='https://media.graphcms.com/pMU8pIU5RbiF6ozBGWif' target='_blank'>
        Professional CV
      </Button>
      <Text paddingTop paddingBottom narrow>
        If you'd like to have me in your team as a <Text fontWeight600 displayInline>Product Owner</Text> or <Text fontWeight600 displayInline>CTO</Text>
      </Text>
    </Container>
  </Container>
)
