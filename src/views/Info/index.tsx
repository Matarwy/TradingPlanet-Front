import React from 'react'
import { Route } from 'react-router-dom'
import { PoolUpdater, ProtocolUpdater, TokenUpdater } from 'state/info/updaters'
import InfoNav from './components/InfoNav'
import Overview from './Overview'
import Pools from './Pools'
import PoolPage from './Pools/PoolPage'
import Tokens from './Tokens'
import RedirectInvalidToken from './Tokens/redirects'

import Page from '../Page'
import { Heading } from '@trading-planet/uikit'
import { useTranslation } from 'contexts/Localization'


const Info: React.FC = () => {

  const { t } = useTranslation()
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
      <ProtocolUpdater />
      <PoolUpdater />
      <TokenUpdater />
      <InfoNav />
      <Route path="/info" exact>
        <Overview />
      </Route>
      <Route path="/info/pools" exact>
        <Pools />
      </Route>
      <Route path="/info/tokens" exact>
        <Tokens />
      </Route>
      <Route exact path={['/info/tokens/:address', '/info/token/:address']} component={RedirectInvalidToken} />
      <Route exact path={['/info/pools/:address', '/info/pool/:address', '/info/pair/:address']} component={PoolPage} />
    </>
  )
}

export default Info
