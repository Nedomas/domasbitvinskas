import React from 'react'
import {
  Heading,
  Container,
  Text,
} from 'candour'

export default () => (
  <Container paddingTop={2} paddingBottom={4} limited>
    <Heading level={2}>
      My Publications
    </Heading>

    <Container paddingTop={6} paddingBottom style={styles.blogPost} component='a' href='https://www.intermix.io/blog/machine-learning-in-the-browser/' target='_blank'>
      <Heading level={3} fontWeight600>
        The Future of Machine Learning in the Browser with TensorFlow.js
      </Heading>
      <Text paddingBottom>
        July 24th, 2018 | intermix.io
      </Text>
      <Text level={2} limited paddingBottom>
        Up until now, I did most of my machine learning work in Python.
        With the recent release of TensorFlow.js – TensorFlow for JavaScript,
        I decided to spend the last couple of months trying out machine learning in the browser.
        Here's what I've learned.
      </Text>
    </Container>
  </Container>
)

const styles = {
  blogPost: {
    display: 'block',
    background: 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url("https://www.intermix.io/wp-content/uploads/ash-edmonds-510566-unsplash-750x500.jpg")',
    backgroundPosition: 'center bottom',
    boxShadow: '0 0 8px 8px #000 inset',
  },
}
