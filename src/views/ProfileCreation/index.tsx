import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Redirect } from 'react-router'
// import Page from 'components/Layout/Page'
import { useProfile } from 'state/profile/hooks'
import PageLoader from 'components/Loader/PageLoader'
import useFetchUserNfts from 'views/Nft/market/Profile/hooks/useFetchUserNfts'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { useFetchCollections } from 'state/nftMarket/hooks'
import Header from './Header'
import ProfileCreationProvider from './contexts/ProfileCreationProvider'
import Steps from './Steps'


import Page from '../Page'
import { Heading } from '@trading-planet/uikit'
import { useTranslation } from 'contexts/Localization'

const ProfileCreation = () => {
  const { account } = useWeb3React()
  const { isInitialized, isLoading, hasProfile } = useProfile()

  useFetchUserNfts(account)
  useFetchCollections()

  // if (!isInitialized || isLoading) {
  //   return <PageLoader />
  // }

  // if (account && hasProfile) {
  //   return <Redirect to={`${nftsBaseUrl}/profile/${account.toLowerCase()}`} />
  // }

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
      <ProfileCreationProvider>
        <Page>
          <Header />
          <Steps />
        </Page>
      </ProfileCreationProvider>
    </>
  )
}

export default ProfileCreation
