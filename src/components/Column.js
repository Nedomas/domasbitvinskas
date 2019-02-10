import React, { Component } from 'react'
import _ from 'lodash'
import {
  Button,
  Container,
  Heading,
  Text,
} from 'candour'
import fluid from '@candour/fluid'

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

    if (!this.items().length) return null

    return (
      <Container style={styles.container} paddingBottom={2}>
        <Container paddingBottom>
          <Heading level={2} displayInline>
            {category}
          </Heading>
          <Text displayInline paddingLeft={0.3}>{_.filter(projects, { category }).length}</Text>
        </Container>
        <Container>
          {_.map(this.items(), ({ name, period, description, url }, n) => (
            <Item
              key={name}
              heading={name}
              subheading={period}
              description={description}
              url={url}
            />
          ))}
          {!this.state.open && this.all().length > closedItemsCount && <Button onClick={() => this.open()} style={styles.button}>More</Button>}
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
    height: 'initial',
    minWidth: 'initial',
    paddingTop: fluid(5, 10),
    paddingBottom: fluid(5, 10),
  },
}
