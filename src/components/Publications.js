import React from 'react'
import {
  Heading,
  Container,
  Text,
} from 'candour'

export default () => (
  <Container paddingTop={2} paddingBottom={4} limited>
    <Heading level={2} paddingBottom={2}>
      My Publications
    </Heading>

    <Container paddingTop={6} borderRadius={4 / 16} paddingLeft={2} paddingRight={2} paddingBottom style={styles.blogPost2} component='a' href='https://closeheat.com/blog/pytorch-lstm-text-generation-tutorial' target='_blank'>
      <Heading level={3} fontWeight600>
        PyTorch LSTM: Text Generation Tutorial
      </Heading>
      <Text paddingBottom>
        June 15th, 2020 | Closeheat
      </Text>
      <Text level={2} limited paddingBottom>
        Key element of LSTM is the ability to work with sequences and its gating mechanism.
      </Text>
    </Container>

    <Container marginTop={2} paddingTop={6} paddingBottom style={styles.blogPost} component='a' href='https://www.linkedin.com/pulse/future-machine-learning-browser-tensorflowjs-domas-bitvinskas/' target='_blank'>
      <Heading level={3} fontWeight600>
        The Future of Machine Learning in the Browser with TensorFlow.js
      </Heading>
      <Text paddingBottom>
        July 24th, 2018 | Originally intermix.io
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
  blogPost2: {
    display: 'block',
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://closeheat.com/og-images/pytorch-lstm-text-generation-tutorial.png")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // boxShadow: '0 0 8px 8px #000 inset',
  },
}
