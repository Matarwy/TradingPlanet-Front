import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'TradingPlanet',
  description:
    'The most popular AMM on BSC by user count! Earn Planet through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by TradingPlanet), NFTs, and more, on a platform you can trust.',
  image: process.env.PUBLIC_URL+'/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('TradingPlanet')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('TradingPlanet')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('TradingPlanet')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('TradingPlanet')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('TradingPlanet')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('TradingPlanet')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('TradingPlanet')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('TradingPlanet')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('TradingPlanet')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('TradingPlanet')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('TradingPlanet')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('TradingPlanet')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('TradingPlanet')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('TradingPlanet')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('TradingPlanet')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('TradingPlanet')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('TradingPlanet')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('TradingPlanet')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('TradingPlanet Info & Analytics')}`,
        description: 'View statistics for TradingPlanet exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('TradingPlanet Info & Analytics')}`,
        description: 'View statistics for TradingPlanet exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('TradingPlanet Info & Analytics')}`,
        description: 'View statistics for TradingPlanet exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('TradingPlanet')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('TradingPlanet')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('TradingPlanet')}`,
      }
    default:
      return null
  }
}
