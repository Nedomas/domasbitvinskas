import React from 'react'
import _ from 'lodash'
import {
  Container,
} from 'candour'

import Column from './Column'

const projects = [
  {
    name: 'Opacity0',
    description: 'Company roadmaps to share with the public',
    category: 'Pre-launch',
  },
  {
    name: 'Abstract',
    description: 'Open-source platform to build AI systems intuitively',
    category: 'Pre-launch',
  },
  {
    name: 'Bloometry',
    description: 'Email verification service',
    period: '2018 Feb - 2018 Jun',
    category: 'Past',
    url: 'https://bloometry.com',
  },
  {
    name: 'Kurkim',
    description: 'Local creatives network',
    category: 'Growing',
    url: 'https://kurkim.lt',
  },
  {
    name: 'Blond',
    period: '2017 Sep - 2018 Feb',
    description: 'ML-based developer sourcing and BI consultancy',
    category: 'Past',
    url: 'http://www.joinblond.com',
  },
  {
    name: 'Closeheat',
    period: '2014 Dec - 2017 Jan',
    description: 'Visual editing layer for static websites',
    category: 'Past',
    url: 'http://closeheat.com',
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
    name: 'Candour',
    period: '2018 May - Now (Pre-release)',
    description: 'Fluid design framework',
    category: 'Open Source',
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
  <Container flex wrap padTop={8} padBottom={4}>
    {_.map(['Growing', 'Pre-launch', 'Past', 'Open Source'], (category) => (
      <Column key={category} category={category} projects={projects} />
    ))}
  </Container>
)
