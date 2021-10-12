import React from 'react'
import { AutoRenewIcon, Flex, Heading } from '@trading-planet/uikit'
import orderBy from 'lodash/orderBy'
import { useTeams } from 'state/teams/hooks'
import Page from '../Page'
import { useTranslation } from 'contexts/Localization'
import TeamListCard from './components/TeamListCard'
import TeamHeader from './components/TeamHeader'

const Teams = () => {
  const { t } = useTranslation()
  const { teams, isLoading } = useTeams()
  const teamList = Object.values(teams)
  const topTeams = orderBy(teamList, ['points', 'id', 'name'], ['desc', 'asc', 'asc'])
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
    <Page>
      <TeamHeader />
      <Flex alignItems="center" justifyContent="space-between" mb="32px">
        <Heading scale="xl">{t('Teams')}</Heading>
        {isLoading && <AutoRenewIcon spin />}
      </Flex>
      {topTeams.map((team, index) => (
        <TeamListCard key={team.id} rank={index + 1} team={team} />
      ))}
    </Page>
  )
}

export default Teams
