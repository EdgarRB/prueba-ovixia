import CommonInterface from './Common';

export interface PokemonList {
  results: CommonInterface[];
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
  stats: PokemonStats[];
  types: PokemonTypes[];
  abilities: PokemonAbilities[];
}

interface Sprites {
  front_default: string;
}

export interface PokemonStats {
  base_stat: number;
  stat: CommonInterface;
}

export interface PokemonTypes {
  type: CommonInterface;
}

export interface PokemonAbilities {
  ability: CommonInterface;
}
