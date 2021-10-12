import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Instantly swap crypto tokens, no registration.',
  reverse: false,
  primaryButton: {
    to: '/swap',
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
  headingText: 'Earn passive income with crypto.',
  bodyText: 'Provide liquidity and earn from transaction fees. Join our staking or yield farming pools.',
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
      // { src: 'BTC', alt: 'BTC token' },
      // { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'TP makes our world go round.',
  bodyText:
    'TP token is at the heart of the TradingPlanet ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x83477a06f73fff92e8cf2c6b2da8efc03294e40c',
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
