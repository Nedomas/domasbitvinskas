import React, { Component } from 'react'
import _ from 'lodash'
import {
  Heading,
  Container,
  Text,
  isSmall,
} from 'candour'
import windowSize from 'react-window-size'

const talks = [
  {
    url: 'https://speakerdeck.com/nedomas/apollo-and-graphql-what-we-learned-building-a-multi-platform-chat-app',
    image: '/talks/apollo-and-graphql-what-we-learned.png',
    date: 'Dec 12th, 2019',
    location: 'Vilnius.js',
  },
  {
    url: 'https://www.youtube.com/watch?v=rqhMx7heBm4',
    image: '/talks/best-kept-secrets.png',
    date: 'Dec 13th, 2018',
    location: 'Vilnius.js',
  },
  {
    url: 'https://speakerdeck.com/nedomas/tensorflow-dot-js-ir-web-ateitis',
    image: '/talks/future-of-web.png',
    date: 'Jul 26th, 2018',
    location: 'NTA Camp',
  },
  {
    url: 'https://speakerdeck.com/nedomas/hack-the-open-source-growth',
    image: '/talks/hack-the-open-source-growth.png',
    date: 'Dec 18th, 2017',
    location: 'Stockholm React Meetup',
  },
  {
    url: 'https://speakerdeck.com/nedomas/market-your-open-source-or-kill-it',
    image: '/talks/market-your-open-source-or-kill-it.png',
    date: 'Jan 8th, 2015',
    location: 'VilniusRB Meetup',
  },
  {
    url: 'https://speakerdeck.com/nedomas/ruby-on-rails-is-dead',
    image: '/talks/rubinai-ant-begiu.jpg',
    date: 'Nov 22th, 2014',
    location: 'VilniusRB Meetup',
  },
  {
    url: 'https://www.youtube.com/watch?v=of_kZD6TstU',
    image: '/talks/rockstars-and-productivity.jpg',
    date: 'Apr 5th, 2014',
    location: 'Ruby Conference Vilnius',
  },
  {
    url: 'https://speakerdeck.com/nedomas/rubis-naikintuve-f-18',
    image: '/talks/rubis-naikintuve-f18.jpg',
    date: 'Oct 26th, 2013',
    location: 'Rails Girls Vilnius',
  },
  {
    url: 'https://speakerdeck.com/nedomas/whats-up-in-ruby-2-dot-0',
    image: '/talks/whats-up-in-ruby-2-0.jpg',
    date: 'Mar 3rd, 2013',
    location: 'VilniusRB Meetup',
  },
]

class Talks extends Component {
  render() {
    return (
      <Container paddingTop={2} paddingBottom={4}>
        <Heading level={2} paddingBottom={2}>
          Talks
        </Heading>

        <Container
          displayFlex
          overflowAuto
          marginRight={isSmall(this) ? -1 : -4}
          marginLeft={isSmall(this) ? -1 : -4}
        >
          {_.map(talks, ({ url, image, date, location }, i) => (
            <Container
              key={url}
              width={12}
              paddingBottom
              paddingRight
              paddingLeft={i === 0 ? (isSmall(this) ? 1 : 4) : 0}
              component='a'
              href={url}
              target='_blank'
              style={{ flexShrink: 0 }}
            >
              <Container component='img' src={image} width='100%' borderRadius={0.3} />
              <Text paddingTop={0.5} textAlignCenter>
                {date}
              </Text>
              <Heading level={4} paddingBottom textAlignCenter>
                {location}
              </Heading>
            </Container>
          ))}
        </Container>
      </Container>
    )
  }
}

export default windowSize(Talks)
