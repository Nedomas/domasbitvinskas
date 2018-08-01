import React from 'react'
import {
  Headline,
  Container,
  Text,
} from 'candour'

export default () => (
  <Container paddingTop={2} paddingBottom={4} limited>
    <Headline level={2} bold>
      My Articles
    </Headline>

    <Container paddingTop={10} paddingBottom style={styles.blogPost} component='a' href='https://www.intermix.io/blog/machine-learning-in-the-browser/' target='_blank'>
      <Headline level={3} bold>
        The Future of Machine Learning in the Browser with TensorFlow.js
      </Headline>
      <Text paddingBottom>
        July 24th, 2018 | intermix.io
      </Text>
      <Text level={3} limited paddingBottom>
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
