import React, { Component } from 'react'
import _ from 'lodash'
import {
  Button,
  Container,
  Headline,
  Text,
} from 'candour'

const closedItemsCount = 4

export default class Column extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  open() {
    this.setState({
      open: true,
    })
  }

  all() {
    const {
      type,
      startups,
    } = this.props

    return _.filter(startups, { type })
  }

  items() {
    if (this.state.open) return this.all()

    return _.take(this.all(), closedItemsCount)
  }

  render() {
    const {
      type,
      startups,
    } = this.props

    return (
      <Container style={styles.container} padBottom={2}>
        <Container flex baseline>
          <Headline level={2} padBottom={0.5} bold>
            {type}
          </Headline>
          <Text padLeft={0.2}>
            {_.filter(startups, { type }).length}
          </Text>
        </Container>
        <Container>
          {_.map(this.items(), ({ name, period, description, url }, n) => (
            <Container key={name} padBottom>
              <Container flex baseline>
                {url && <a href={url} target='_blank' style={styles.url}>
                  <Headline level={3}>
                    {name}
                  </Headline>
                </a>}
                {!url && <Headline level={3}>
                  {name}
                </Headline>}

                <Text padLeft={0.3}>{period}</Text>
              </Container>
              <Text level={3}>
                {description}
              </Text>
            </Container>
          ))}
          {!this.state.open && this.all().length > closedItemsCount && <Button onClick={() => this.open()} narrow tiny>More</Button>}
        </Container>
      </Container>
    )
  }
}

const styles = {
  container: {
    flexShrink: 0,
    width: '100%',
    maxWidth: '550px',
  },
  url: {
    color: '#fff',
    textDecoration: 'none',
    borderBottom: '1px solid hsla(0, 0%, 100%, 0.4)',
  },
}
