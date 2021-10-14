import { FooterLinkType } from '@trading-planet/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: '#',
      },
      {
        label: t('Blog'),
        href: 'https://tradingplanet.org',
      },
      {
        label: t('white paper'),
        href: '#',
      },
       {
        label: t('FAQ'),
        href: '#',
      },
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
  {
    label: t('Developers'),
    items: [
      {
        label: t('Documentation'),
        href: '#',
      },
      {
        label: t('Bug Bounty'),
        href: '#',
      },
      {
        label: t('Audits'),
        href: '#',
      },
      {
        label: t('Careers'),
        href: '#',
      },
    ],
  },
]
