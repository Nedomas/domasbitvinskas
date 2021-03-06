import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import {
  Container,
} from 'candour'

import Item from './Item'

const technologies = [
  {
    name: 'PyTorch',
    since: '2019-06-01',
    sinceNote: '(was a fan of Tensorflow since 2018)',
    description: 'PyTorch is to Machine Learning what React.js was to web apps. It is just the start of the growth curve, but keep an eye on it for the next 2-3 years and you will be amazed.',
  },
  {
    name: 'React.js',
    since: '2013-10-01',
    description: `No-brainer for ${moment().format('YYYY')}. Vibrant community that has been setting the trends in Javascript world for the last ${moment("2013-10-01").fromNow(true)}.`,
  },
  {
    name: 'GraphQL + Apollo',
    since: '2015-06-01',
    description: `Using consistent, pragmatic & well thought-out API's of GraphQL reveals how messy REST was.`,
  },
  {
    name: 'Prisma',
    since: '2017-06-01',
    sinceNote: '(including Graphcool)',
    description: 'Answer to the problems everybody had when working with GraphQL for the last few years. I believe Prisma will be our best friend over the next year.',
  },
  //  {
  //    name: 'Tensorflow.js',
  //    since: '2018-05-01',
  //    description: 'Powerful machine learning just came to the browser with Tensorflow.js and will enable more developers to collaborate and build more complex models.',
  //  },
]

export default () => (
  <Container paddingTop>
    {_.map(technologies, ({ name, since, sinceNote = '', description }) => (
      <Item
        key={name}
        heading={name}
        subheading={`${moment(since).fromNow(true)} experience ${sinceNote}`}
        description={description}
      />
    ))}
  </Container>
)
