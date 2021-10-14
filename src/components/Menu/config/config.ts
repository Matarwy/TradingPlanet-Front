import { MenuItemsType, DropdownMenuItemType } from '@trading-planet/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Exchange',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Money',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: 'Award',
  //   items: [
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: 'Auction',
    items: [
      {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
        status: {
          text: t('Live'),
          color: 'failure',
        },
      },
      {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
      },
    ],
  },
  {
    label: '',
    href: '#',
    icon: 'Apps',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        label: t('IFO'),
        href: '/ifo',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://tradingplanet.org',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Home'),
        href: 'https://tradingplanet.io',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
