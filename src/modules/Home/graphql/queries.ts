import { gql } from "@apollo/client";

export const GET_LIST_POKEMON = gql`
  query get_listPokemon($limit: Int, $offset: Int) {
    gen3_species: pokemon_v2_pokemonspecies(
      order_by: { id: asc }
      limit: $limit
      offset: $offset
    ) {
      name
      id
      pokemon_v2_pokemons {
        id
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`;
