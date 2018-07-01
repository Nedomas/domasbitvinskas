import React, { Component } from 'react'
import {
  Container,
  Headline,
  Text,
  Button,
  isSmall,
} from 'candour'
import _ from 'lodash'
import windowSize from 'react-window-size'
import { Helmet } from 'react-helmet'

import ogUrl from '../helpers/ogUrl'
import Column from './Column'

const title = 'Domas Bitvinskas - Maker & Startup Fanatic'
const description = 'Just keep running better & better startups while others scream about how they are the best.'

const startups = [
  {
    name: 'Abstract',
    period: '',
    description: 'Open-source platform to build AI systems intuitively',
    type: 'Pre-launch',
  },
  {
    name: 'Opacity100',
    period: '',
    description: 'Company roadmaps to share with the public',
    type: 'Pre-launch',
  },
  {
    name: 'Bloometry',
    description: 'Email verification service',
    type: 'Growing',
    url: 'https://bloometry.com',
  },
  {
    name: 'Kurkim',
    description: 'Local creatives network',
    type: 'Growing',
    url: 'https://kurkim.lt',
  },
  {
    name: 'Blond',
    period: '2017 Jan - 2018 Feb',
    description: 'Machine learning based developer sourcing',
    type: 'Past',
    url: 'http://www.joinblond.com',
  },
  {
    name: 'Closeheat',
    period: '2014 Dec - 2017 Jan',
    description: 'Visual editing layer for static websites',
    type: 'Past',
    url: 'http://closeheat.com',
  },
  {
    name: 'Wild Rituals',
    period: '2017 Aug - 2017 Nov',
    description: 'Clothing brand (print on demand, drop-shipping)',
    type: 'Past',
  },
  {
    name: 'Human Emails',
    period: '2015 Jun - 2017 Nov',
    description: 'Ethical email tracking via signatures',
    type: 'Past',
  },
  {
    name: 'Renegades',
    period: '2016 Aug - 2016 Nov',
    description: 'Extreme sports community',
    type: 'Past',
  },
  {
    name: 'Healthitecture',
    period: '2016 May',
    description: 'Raw health food rankings journal',
    type: 'Past',
  },
  {
    name: 'My Friend is a Founder',
    period: '2015 May',
    description: 'A series of interviews with my startup founder friends',
    type: 'Past',
  },
  {
    name: 'Gymnast',
    period: '2014 Nov - 2015 Jan',
    description: 'Workout tracker for Starting Strength',
    type: 'Past',
  },
  {
    name: 'Pavonine',
    period: '2014 Oct - 2014 Nov',
    description: 'Backend as a service for React.js apps',
    type: 'Past',
  },
  {
    name: 'PaperGod',
    period: '2014 Sep - 2014 Dec',
    description: 'Mobile app wireframes app',
    type: 'Past',
  },
  {
    name: 'Pamokyk',
    period: '2014 Jul',
    description: 'Skill exchange public board',
    type: 'Past',
  },
  {
    name: 'Pathoscope',
    period: '2013 Dec - 2014 Jun',
    description: 'Crowdsourced platform for sharing learning paths',
    type: 'Past',
  },
  {
    name: 'Platforma',
    period: '2010 Jan - 2012 Mar',
    description: 'Financial stock analysis platform',
    type: 'Past',
  },
  {
    name: 'Candour',
    period: '2018 May - Now (Pre-release)',
    description: 'Fluid design framework',
    type: 'Open Source',
  },
  {
    name: 'Zapata',
    period: '2014 Jul - 2017 Dec',
    description: 'An Automatic Automated Test Writer',
    type: 'Open Source',
    url: 'https://github.com/Nedomas/zapata',
  },
  {
    name: 'Databound',
    period: '2014 Oct - 2015 Apr',
    description: 'Provides Javascript a simple API to the RoR CRUD',
    type: 'Open Source',
    url: 'https://github.com/Nedomas/databound',
  },
  {
    name: 'Indicators',
    period: '2012 Aug - 2013 Jan',
    description: 'Stock market technical analysis library',
    type: 'Open Source',
    url: 'https://github.com/Nedomas/indicators',
  },
]

class App extends Component {
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
      <Container style={styles.containter}>
        <Helmet>
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />

          <meta property='og:image' content={`${ogUrl()}/ogimage.jpg`} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:image:type' content='image/jpg' />
          <meta property='og:url' content={ogUrl()} />
          <link rel='canonical' href={ogUrl()} />
          <meta property='og:type' content='website' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:site_name' content={title} />
        </Helmet>

        <video
          style={styles.video}
          src='/hn.mp4'
          muted
          autoPlay
          loop
          ref='video'
        />
        <Container pad={isSmall(this) ? 2 : 4} padTop={2}>
          <Headline level={4} uppercase bold>
            Domas Bitvinskas
          </Headline>
          <Container padTop={4} narrow>
            <Headline bold limited>
              Maker <br/>& Startup Fanatic
            </Headline>
            <Text level={2}>
              Just keep running better & better startups while others scream about how they are the best.
            </Text>
          </Container>
          <Container flex wrap padTop={8} padBottom={4}>
            {_.map(['Growing', 'Pre-launch', 'Past', 'Open Source'], (type) => (
              <Column key={type} type={type} startups={startups} />
            ))}
          </Container>

          <Container padTop={4} padBottom={4} limited>
            <Headline level={2} bold>
              Tech Side
            </Headline>
            <Text level={3} limited padBottom>
              10+ years developing websites and apps with the most promising tech.
              Here are my <Text level={3} bold inline>4 bets</Text> for the future and technologies that I will continue
              to work with.
            </Text>
            <Container>
              <Headline level={3}>
                React.js <Text inline>4 years experience</Text>
              </Headline>
              <Text level={2}>
                No-brainer for 2018/2019. Vibrant community that has been setting the
                trends in Javascript world for the last 5 years.
              </Text>
            </Container>
            <Container padTop>
              <Headline level={3}>
                GraphQL + Apollo <Text inline>2 years experience</Text>
              </Headline>
              <Text level={2}>
                Using consistent, pragmatic & well thought-out API's of GraphQL reveals how messy
                REST was.
              </Text>
            </Container>
            <Container padTop>
              <Headline level={3}>
                Prisma <Text inline>1 year experience (including Graphcool)</Text>
              </Headline>
              <Text level={2}>
                Answer to the problems everybody had when working with GraphQL for
                the last few years. I believe Prisma will be our best friend
                over the next year.
              </Text>
            </Container>
            <Container padTop>
              <Headline level={3}>
                Tensorflow.js <Text inline>Just a few months</Text>
              </Headline>
              <Text level={2}>
                Powerful machine learning just came to the browser with Tensorflow.js and
                will enable more developers to collaborate and build more complex models.
              </Text>
            </Container>

            <Container flex padTop={2} alignItemsCenter wrap>
              <Button disabled marginRight level={2} component='a' bold style={styles.cv}>
                My CV (Soon)
              </Button>
              <Text padTop padBottom narrow>
                If you'd like to have me in your team as a <Text bold inline>CTO</Text> or <Text bold inline>VP of Engineering</Text>
              </Text>
            </Container>
          </Container>

          <Container padTop={4} limited padBottom={6}>
            <Headline level={2} bold>
              How to reach me
            </Headline>
            <Text level={3} padBottom>
              Love to connect with people who have a growth mindset.
              <br/>
              I advise early-stage startups on growth, tech and business.
              You can also hire me to speak at your event on growth hacking & open-source.
            </Text>
            <Container flex wrap>
              <Button component='a' marginRight marginBottom style={styles.button} bold href='https://www.linkedin.com/in/domasbitvinskas' target='_blank'>
                Connect on LinkedIn
              </Button>
              <Button component='a' style={styles.button} bold href='mailto:domas.bitvinskas@me.com'>
                Email me
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    )
  }
}

export default windowSize(App)

const styles = {
  video: {
    width: '100%',
    float: 'left',
    top: 0,
    padding: '20px 0 0 0',
    position: 'absolute',
    zIndex: -1,
  },
  button: {
    width: '100%',
    minWidth: '250px',
    maxWidth: '250px',
  },
  cv: {
    // width: '100%',
    minWidth: '250px',
    maxWidth: '250px',
  },
}
