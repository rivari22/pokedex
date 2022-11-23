import { gql } from "@apollo/client";

export const GET_DETAIL_COMPARE_POKEMON = gql`
query get_comparePokemon($pokemonName1: String!, $pokemonName2: String!) {
  firstPokemon: pokemon_v2_pokemonspecies(
    where: { name: { _eq: $pokemonName1 } }
    limit: 1
  ) {
    id
    name
    gender_rate
    hatch_counter
    egg_groups: pokemon_v2_pokemonegggroups {
      group: pokemon_v2_egggroup {
        name
      }
    }
    pokemons: pokemon_v2_pokemons {
      id
      name
      height
      weight
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        base_stat
        stat: pokemon_v2_stat {
          name
        }
      }
    }
  }

  secondPokemon: pokemon_v2_pokemonspecies(
    where: { name: { _eq: $pokemonName2 } }
    limit: 1
  ) {
    id
    name
    gender_rate
    hatch_counter
    egg_groups: pokemon_v2_pokemonegggroups {
      group: pokemon_v2_egggroup {
        name
      }
    }
    pokemons: pokemon_v2_pokemons {
      id
      name
      height
      weight
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        base_stat
        stat: pokemon_v2_stat {
          name
        }
      }
    }
  }
}
`;
