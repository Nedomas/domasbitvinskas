import React, { Component } from 'react'

export default class VideoBackground extends Component {
  componentDidMount() {
    this.update()
  }

  componentDidUpdate() {
    this.update()
  }

  update() {
    this.refs.video.setAttribute('muted', '1');
    this.refs.video.setAttribute('playsinline', '1');
    this.refs.video.setAttribute('autoplay', '1');
  }

  render() {
    return (
      <video
        style={styles.container}
        src='/hn.mp4'
        muted
        autoPlay
        loop
        ref='video'
      />
    )
  }
}

const styles = {
  container: {
    width: '100%',
    float: 'left',
    top: 0,
    padding: '20px 0 0 0',
    position: 'absolute',
    zIndex: -1,
  },
}
