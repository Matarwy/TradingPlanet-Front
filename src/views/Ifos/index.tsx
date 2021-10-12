import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Route, useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Flex } from '@trading-planet/uikit'
import Container from 'components/Layout/Container'
import Hero from './components/Hero'
import CurrentIfo from './CurrentIfo'
import PastIfo from './PastIfo'

import Page from '../Page'
import { Heading } from '@trading-planet/uikit'


const Ifos = () => {
  const { t } = useTranslation()
  const { path, url, isExact } = useRouteMatch()


  return (
    <>
      <Page>
      <div>
            <img src="/coming-soon.svg" alt="coming soon" style={{
              width: 600,
              marginBottom: 40,
              marginTop: 20,
            }}/>
          </div>
        <Heading as="h2" scale="xxl" color="secondary" mb="24px">
          {t('"Coming Soon...')}
        </Heading>
    </Page>
    </>
  );
  return (
    <>
      <Hero />
      <Container>
        <Flex justifyContent="center" alignItems="center" mb="32px">
          <ButtonMenu activeIndex={!isExact ? 1 : 0} scale="sm" variant="subtle">
            <ButtonMenuItem as={Link} to={`${url}`}>
              {t('Next IFO')}
            </ButtonMenuItem>
            <ButtonMenuItem id="past-ifos-button" as={Link} to={`${url}/history`}>
              {t('Past IFOs')}
            </ButtonMenuItem>
          </ButtonMenu>
        </Flex>
        <Route exact path={`${path}`}>
          <CurrentIfo />
        </Route>
        <Route path={`${path}/history`}>
          <PastIfo />
        </Route>
      </Container>
    </>
  )
}

export default Ifos
