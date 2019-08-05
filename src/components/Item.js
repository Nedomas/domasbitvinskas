import React from 'react'
import {
  Heading,
  Container,
  Text,
} from 'candour'

export default ({ heading, subheading, description, url }) => (
  <Container paddingBottom>
    <Container>
      {url && <a href={url} target='_blank' style={styles.url} rel='noopener noreferrer'>
        <Heading displayInline level={3}>
          {heading}
        </Heading>
      </a>}
      {!url && <Heading displayInline level={3}>
        {heading}
      </Heading>}

      <Text displayInline paddingLeft={0.3}>{subheading}</Text>
    </Container>
    <Text level={2}>
      {description}
    </Text>
  </Container>
)

const styles = {
  url: {
    color: '#fff',
    textDecoration: 'none',
    borderBottom: '1px solid hsla(0, 0%, 100%, 0.4)',
  },
}
