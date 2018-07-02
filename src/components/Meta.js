import React from 'react'
import { Helmet } from 'react-helmet'
import ogUrl from '../helpers/ogUrl'

const title = 'Domas Bitvinskas - Maker & Startup Fanatic'
const description = 'Just keep running better & better startups while others scream about how they are the best.'

export default () => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />

    <meta property='og:image' content='https://media.graphcms.com/WHWajLNTlytAl0BwDhwA' />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='630' />
    <meta property='og:image:type' content='image/jpg' />
    <meta property='og:url' content={ogUrl()} />
    <link rel='canonical' href={ogUrl()} />
    <meta property='og:type' content='website' />
    <meta property='og:locale' content='en_US' />
    <meta property='og:site_name' content={title} />
  </Helmet>
)
