import React from 'react'
import { Link } from 'gatsby'
import { Typography } from '@material-ui/core'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>What is this?</h1>
    <Typography>
      This is the gatsby default starter with{' '}
      <a
        href="https://material-ui.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        material ui
      </a>{' '}
      integration. There is also tests added with{' '}
      <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
        jest
      </a>
      , as well as{' '}
      <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">
        eslint
      </a>{' '}
      and{' '}
      <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
        prettier
      </a>{' '}
      are configured. For Visual Studio Code settings see the readme
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Typography>
  </Layout>
)

export default IndexPage
