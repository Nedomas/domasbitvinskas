import React from 'react'
import _ from 'lodash'
import {
  Container,
} from 'candour'

import Column from './Column'

const projects = [
 {
   name: 'Vieta',
   description: 'Chat for projects',
   category: 'Growing',
   url: 'https://vieta.app',
 },
  {
    name: 'Atlasmic',
    description: 'Sales Acceleration Platform',
    category: 'Growing',
    url: 'https://atlasmic.com',
  },
  {
    name: 'Blond',
    category: 'Growing',
    period: '2017 Sep - Now',
    description: 'ML-based developer sourcing and BI consultancy',
    url: 'http://www.joinblond.com',
  },
  {
    name: 'GraphQL.jobs',
    description: 'Jobs board for modern GraphQL-related jobs',
    category: 'Growing',
    url: 'https://graphql.jobs',
  },
  {
    name: 'Closeheat',
    description: 'Focus on Machine Learning',
    category: 'Pre-launch',
    url: 'https://closeheat.com',
  },
  {
    name: 'Honestive',
    description: 'Transparency layer for modern startups',
    category: 'Pre-launch',
    url: 'https://honestive.com',
  },
  {
    name: 'Abstract',
    description: 'Open-source platform to build AI systems intuitively',
    category: 'Pre-launch',
  },
  {
    name: 'Kurkim',
    description: 'Local creatives network',
    period: '2018 Jun - 2018 Oct',
    category: 'Past',
    url: 'https://kurkim.netlify.com',
  },
  {
    name: 'Bloometry',
    description: 'Email verification service',
    period: '2018 Feb - 2018 Jun',
    category: 'Past',
    url: 'https://bloometry.com',
  },
  {
    name: 'Closeheat Editor',
    period: '2014 Dec - 2017 Jan',
    description: 'Visual editing layer for static websites',
    category: 'Past',
    url: 'https://editor.closeheat.com',
  },
  {
    name: 'Wild Rituals',
    period: '2017 Aug - 2017 Nov',
    description: 'Clothing brand (print on demand, drop-shipping)',
    category: 'Past',
  },
  {
    name: 'Human Emails',
    period: '2015 Jun - 2017 Nov',
    description: 'Ethical email tracking via signatures',
    category: 'Past',
  },
  {
    name: 'Renegades',
    period: '2016 Aug - 2016 Nov',
    description: 'Extreme sports community',
    category: 'Past',
  },
  {
    name: 'Healthitecture',
    period: '2016 May',
    description: 'Raw health food rankings journal',
    category: 'Past',
  },
  {
    name: 'My Friend is a Founder',
    period: '2015 May',
    description: 'A series of interviews with my startup founder friends',
    category: 'Past',
  },
  {
    name: 'Gymnast',
    period: '2014 Nov - 2015 Jan',
    description: 'Workout tracker for Starting Strength',
    category: 'Past',
  },
  {
    name: 'PaperGod',
    period: '2014 Sep - 2014 Dec',
    description: 'Mobile app wireframes app',
    category: 'Past',
  },
  {
    name: 'Pavonine',
    period: '2014 Oct - 2014 Nov',
    description: 'Backend as a service for React.js apps',
    category: 'Past',
  },
  {
    name: 'Pamokyk',
    period: '2014 Jul',
    description: 'Social skill exchange public board',
    category: 'Past',
  },
  {
    name: 'Pathoscope',
    period: '2013 Dec - 2014 Jun',
    description: 'Crowdsourced platform for sharing learning paths',
    category: 'Past',
  },
  {
    name: 'Platforma',
    period: '2010 Jan - 2012 Mar',
    description: 'Financial stock analysis platform',
    category: 'Past',
  },
  {
    name: 'Amendable',
    period: '2018 May - Now (Pre-release)',
    description: 'React Abstraction Layer for better design systems',
    category: 'Open Source',
    url: 'https://amendable.dev',
  },
  {
    name: 'Zapata',
    period: '2014 Jul - 2016 May',
    description: 'An Automatic Automated Test Writer',
    category: 'Open Source',
    url: 'https://github.com/Nedomas/zapata',
  },
  {
    name: 'Databound',
    period: '2014 Oct - 2015 Apr',
    description: 'Provides Javascript a simple API to the RoR CRUD',
    category: 'Open Source',
    url: 'https://github.com/Nedomas/databound',
  },
  {
    name: 'Indicators',
    period: '2012 Aug - 2013 Jan',
    description: 'Stock market technical analysis library',
    category: 'Open Source',
    url: 'https://github.com/Nedomas/indicators',
  },
]

export default () => (
  <Container displayFlex flexWrapWrap paddingTop={8} paddingBottom={4}>
    {_.map(['Growing', 'Pre-launch', 'Open Source', 'Past'], (category) => (
      <Column key={category} category={category} projects={projects} />
    ))}
  </Container>
)
