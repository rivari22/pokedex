import { gql } from "@apollo/client";

export const GET_DETAIL_POKEMON = gql`
  query get_detailPokemon($name: String!) {
    species: pokemon_v2_pokemonspecies(
      where: { name: { _eq: $name } }
      limit: 1
    ) {
      id
      gender_rate
      hatch_counter
      name
      description: pokemon_v2_pokemonspeciesflavortexts(
        limit: 1
        where: { pokemon_v2_language: { name: { _eq: "en" } } }
      ) {
        flavor_text
      }
      evolutions: pokemon_v2_evolutionchain {
        species: pokemon_v2_pokemonspecies(order_by: { order: asc }) {
          id
          name
          evolves_from_species_id
          evolutions: pokemon_v2_pokemonevolutions {
            min_level
            min_affection
            min_beauty
            min_happiness
            gender_id
            time_of_day
            move: pokemon_v2_move {
              name
            }
            by_held_item: pokemonV2ItemByHeldItemId {
              name
            }
            item: pokemon_v2_item {
              name
            }
            evolution_trigger: pokemon_v2_evolutiontrigger {
              name
            }
            location: pokemon_v2_location {
              name
            }
          }
        }
      }
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
    species_aggregate: pokemon_v2_pokemonspecies_aggregate {
      aggregate {
        count
      }
    }
  }
`;
