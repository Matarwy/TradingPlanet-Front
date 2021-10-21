import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything without registration it\'s completely decentralised platform',
  bodyText: 'Instantly swap crypto tokens, no registration.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x363387914c38de4e01acb79221635fe87288ddb9',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://tradingplanet.org/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      // { src: 'stonks', alt: 'Stocks chart' },
      // { src: 'folder', alt: 'Folder with TP token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Not Just a Trader Here, You\'re More Like an Owner',
  bodyText: 'With TP, our governance token, you can help decide the future of the exchange. As we grow, you grow!',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://tradingplanet.org',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
       { src: 'BTC', alt: 'BTC token' },
       { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'TP makes our planet different.',
  bodyText:
    'TP token is at the heart of the TradingPlanet ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x363387914c38de4e01acb79221635fe87288ddb9',
    text: 'Buy TP',
    external: false,
  },
  secondaryButton: {
    to: 'https://tradingplanet.org',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/planet/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d TradingPlanet' },
      { src: 'top-right', alt: 'Small 3d TradingPlanet' },
      { src: 'coin', alt: 'TP token' },
      { src: 'top-left', alt: 'Small 3d TradingPlanet' },
    ],
  },
}
