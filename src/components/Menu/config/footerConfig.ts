import { FooterLinkType } from '@trading-planet/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://t.me/Tradingplanet_Group',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@TradingPlanetEX',
      },
      {
        label: t('WhitePaper'),
        href: 'https://tradingplanet.finance/TradingPlanetWhitePaper.pdf',
      },
      {
        label: t('Audit'),
        href: 'https://tradingplanet.finance/TradingPlanetAudit.pdf',
      },
      //  {
      //   label: t('FAQ'),
      //   href: '#',
      // },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: '#',
      //   isHighlighted: true,
      // },
    ],
  },
  // {
  //   label: t('Help'),
  //   items: [
  //     {
  //       label: t('Customer Support'),
  //       href: '#',
  //     },
  //     {
  //       label: t('Troubleshooting'),
  //       href: '#',
  //     },
  //     {
  //       label: t('Guides'),
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: t('Developers'),
  //   items: [
  //     // {
  //     //   label: t('Documentation'),
  //     //   href: 'https://medium.com/@TradingPlanetEX',
  //     // },
  //     // {
  //     //   label: t('Bug Bounty'),
  //     //   href: '#',
  //     // },
  //     // {
  //     //   label: t('Audits'),
  //     //   href: 'https://medium.com/@TradingPlanetEX',
  //     // },
  //     // {
  //     //   label: t('Careers'),
  //     //   href: '#',
  //     // },
  //   ],
  // },
]
