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
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
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
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with PLANET token' },
    ],
  },
}

export const PLANETSectionData: SalesSectionProps = {
  headingText: 'PLANET makes our world go round.',
  bodyText:
    'PLANET token is at the heart of the TradingPlanet ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x96e738bc52fBcc305E8c4401d05C532Dd4D2F314',
    text: 'Buy PLANET',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.tradingplanet.finance/tokenomics/PLANET',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/PLANET/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d TradingPlanet' },
      { src: 'top-right', alt: 'Small 3d TradingPlanet' },
      { src: 'coin', alt: 'PLANET token' },
      { src: 'top-left', alt: 'Small 3d TradingPlanet' },
    ],
  },
}
