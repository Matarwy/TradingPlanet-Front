import { Address } from '../types'

export enum CollectionKey {
  TradingPlanet = 'TradingPlanet',
}

export type Collection = {
  name: string
  description?: string
  slug: string
  address: Address
}

export type Collections = {
  [key in CollectionKey]: Collection
}
