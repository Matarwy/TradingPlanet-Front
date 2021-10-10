import React from 'react'
import { Flex } from '@trading-planet/uikit'
import styled from 'styled-components'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Proposals } from './components/Proposals'

import Page from 'components/Layout/Page'
import { Heading } from '@trading-planet/uikit'
import { useTranslation } from 'contexts/Localization'


const Chrome = styled.div`
  flex: none;
`

const Content = styled.div`
  flex: 1;
  height: 100%;
`

const Voting = () => {
  const { t } = useTranslation()
  return (
    <>
      <Page>
        <Heading as="h2" scale="xxl" color="secondary" mb="24px">
          {t('"Coming Soon...')}
        </Heading>
    </Page>
    </>
  );
  
  return (
    <>
      <PageMeta />
      <Flex flexDirection="column" minHeight="calc(100vh - 64px)">
        <Chrome>
          <Hero />
        </Chrome>
        <Content>
          <Proposals />
        </Content>
        <Chrome>
          <Footer />
        </Chrome>
      </Flex>
    </>
  )
}

export default Voting
