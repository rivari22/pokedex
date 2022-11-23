import { gql } from "@apollo/client";

export const GET_LIST_POKEMON = gql`
  query get_listPokemon(
    $limit: Int
    $offset: Int
    $generations: [Int!]
    $types: [Int!]
  ) {
    gen3_species: pokemon_v2_pokemonspecies(
      where: {
        generation_id: { _in: $generations }
        pokemon_v2_pokemons: {
          pokemon_v2_pokemontypes: { pokemon_v2_type: { id: { _in: $types } } }
        }
      }
      limit: $limit
      offset: $offset
      order_by: { id: asc }
    ) {
      name
      id
      generation_id
      pokemon_v2_pokemons {
        id
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_LIST_TYPE_GENERATION = gql`
  query get_listTypeAndGene {
    pokemon_v2_type {
      name
      id
    }
    generations: pokemon_v2_generation {
      name
      id
    }
  }
`;
