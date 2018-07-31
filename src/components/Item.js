import React from 'react'
import {
  Headline,
  Container,
  Text,
} from 'candour'

export default ({ headline, subheadline, description, url }) => (
  <Container paddingBottom>
    <Container>
      {url && <a href={url} target='_blank' style={styles.url}>
        <Headline inline level={3}>
          {headline}
        </Headline>
      </a>}
      {!url && <Headline inline level={3}>
        {headline}
      </Headline>}

      <Text inline paddingLeft={0.3}>{subheadline}</Text>
    </Container>
    <Text level={3}>
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
