import React from 'react'
import _ from 'lodash'
import {
  Container,
} from 'candour'

import Item from './Item'

const technologies = [
  {
    name: 'React.js',
    experience: '4 years experience',
    description: 'No-brainer for 2018/2019. Vibrant community that has been setting the trends in Javascript world for the last 4 years.',
  },
  {
    name: 'GraphQL + Apollo',
    experience: '2 years experience',
    description: `Using consistent, pragmatic & well thought-out API's of GraphQL reveals how messy REST was.`,
  },
  {
    name: 'Prisma',
    experience: '1 year experience (including Graphcool)',
    description: 'Answer to the problems everybody had when working with GraphQL for the last few years. I believe Prisma will be our best friend over the next year.',
  },
  {
    name: 'Tensorflow.js',
    experience: 'Just a few months',
    description: 'Powerful machine learning just came to the browser with Tensorflow.js and will enable more developers to collaborate and build more complex models.',
  },
]

export default () => (
  <Container padTop>
    {_.map(technologies, ({ name, experience, description }) => (
      <Item
        key={name}
        headline={name}
        subheadline={experience}
        description={description}
      />
    ))}
  </Container>
)
