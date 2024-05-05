import CommonInterface from './Common';

export interface Evolution {
  id: number;
  chain: EvoChain;
}

export interface EvoChain {
  species: CommonInterface;
  evolves_to: EvoChain[];
}
