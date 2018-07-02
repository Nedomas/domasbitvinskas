import React, { Component } from 'react'
import _ from 'lodash'
import {
  Button,
  Container,
  Headline,
  Text,
} from 'candour'

import Item from './Item'

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
      category,
      projects,
    } = this.props

    return _.filter(projects, { category })
  }

  items() {
    if (this.state.open) return this.all()

    return _.take(this.all(), closedItemsCount)
  }

  render() {
    const {
      category,
      projects,
    } = this.props

    return (
      <Container style={styles.container} padBottom={2}>
        <Container>
          <Headline level={2} padBottom={0.5} bold inline>
            {category}
          </Headline>
          <Text inline padLeft={0.3}>{_.filter(projects, { category }).length}</Text>
        </Container>
        <Container>
          {_.map(this.items(), ({ name, period, description, url }, n) => (
            <Item
              key={name}
              headline={name}
              subheadline={period}
              description={description}
              url={url}
            />
          ))}
          {!this.state.open && this.all().length > closedItemsCount && <Button onClick={() => this.open()} narrow tiny style={styles.button}>More</Button>}
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
  button: {
    width: 'initial',
    minWidth: 'initial',
  },
}
