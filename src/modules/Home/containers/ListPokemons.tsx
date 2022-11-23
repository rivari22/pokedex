import React, { useContext } from "react";
import { Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Image from "next/image";
import Link from "next/link";

import { FilterListContext } from "../../../context/FilterListContext";
import { GET_LIST_POKEMON } from "../graphql/queries";
import { COLORS } from "../../../styles/color";
import { URL_IMAGE } from "../../../config/config";
import { listAndGenerationType } from "./FilterPage";

type ListPokemonProps = {
  generations: Array<listAndGenerationType>;
  types: Array<listAndGenerationType>;
};

const ListPokemon: React.FC<ListPokemonProps> = ({ generations, types }) => {
  const { filter, setSelectedCompare, isCompareActive, selectedCompare } =
    useContext(FilterListContext);

  const { data, fetchMore } = useQuery(GET_LIST_POKEMON, {
    variables: {
      offset: 0,
      limit: 20,
      generations: filter.generations.length
        ? filter.generations
        : generations.map((value) => value.id),
      types: filter.types.length
        ? filter.types
        : types.map((value) => value.id),
    },
  });

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        offset: data?.gen3_species?.length,
        limit: 20,
      },
      updateQuery: (prev, { fetchMoreResult }: { fetchMoreResult?: any }) => {
        if (!fetchMoreResult) return prev;

        return {
          gen3_species: [...prev.gen3_species, ...fetchMoreResult.gen3_species],
        };
      },
    });
  };

  const handleSelectComparation = ({ name }: { name: string }) => {
    setSelectedCompare((prev) => {
      const temp = { ...prev };
      if (!temp.firstPokemon) {
        temp.firstPokemon = name;
      } else if (!temp.secondPokemon) {
        temp.firstPokemon === name
          ? (temp.firstPokemon = "")
          : (temp.secondPokemon = name);
      } else if (!!temp.firstPokemon && !!temp.secondPokemon) {
        temp.firstPokemon == name
          ? (temp.firstPokemon = "")
          : (temp.secondPokemon = "");
      }
      return { ...temp };
    });
  };

  return (
    <Grid position="relative">
      <InfiniteScroll
        dataLength={data?.gen3_species?.length || 0}
        next={handleFetchMore}
        scrollThreshold={1}
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          padding: "0px 8px",
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data?.gen3_species?.map((item: any) => (
          <Grid
            key={item.id}
            item
            xs={6}
            padding={1}
            component={"section"}
            style={{ flexBasis: "50%" }}
          >
            <Paper
              elevation={4}
              style={{
                padding: 10,
                borderRadius: 20,
                backgroundColor:
                  COLORS?.[
                    item.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemontypes?.[0]
                      ?.pokemon_v2_type.name
                  ]?.base || COLORS.default.base,
              }}
            >
              {isCompareActive && (
                <input
                  type="checkbox"
                  onChange={() => handleSelectComparation({ name: item.name })}
                  disabled={
                    !!selectedCompare.firstPokemon &&
                    selectedCompare.firstPokemon !== item.name &&
                    !!selectedCompare.secondPokemon &&
                    selectedCompare.secondPokemon !== item.name
                  }
                />
              )}
              <Link href={`pokemon/${item.name}`}>
                <Grid container item height={100} flexWrap="wrap">
                  <Grid item xs={7}>
                    <Typography noWrap textTransform="capitalize" color="white">
                      {item.name}
                    </Typography>
                    <Stack direction="column" spacing={1} mt={"4px"}>
                      {item.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemontypes?.map(
                        (
                          type: { pokemon_v2_type: { name: string } },
                          idx: number
                        ) => (
                          <Chip
                            label={type.pokemon_v2_type.name}
                            key={idx}
                            size={"small"}
                            style={{
                              width: "fit-content",
                              padding: "0px 6px 2px 6px",
                              color: "white",
                              textTransform: "capitalize",
                              backgroundColor:
                                COLORS?.[type.pokemon_v2_type.name]?.background,
                            }}
                          />
                        )
                      )}
                    </Stack>
                  </Grid>
                  <Grid
                    container
                    item
                    position={"relative"}
                    xs={5}
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Grid item>
                      <Image
                        alt="pokemon"
                        src={`${URL_IMAGE}${item.id}.png`}
                        fill={true}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            </Paper>
          </Grid>
        ))}
      </InfiniteScroll>
      {!!selectedCompare.firstPokemon && !!selectedCompare.secondPokemon && (
        <Box
          style={{
            position: "fixed",
            left: "auto",
            bottom: 40,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Link
            style={{
              width: "fit-content",
              backgroundColor: "white",
              padding: "4px 16px 4px 22px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            href={`pokemon/${selectedCompare.firstPokemon}/${selectedCompare.secondPokemon}`}
          >
            <Typography>{selectedCompare.firstPokemon}</Typography>
            <Typography ml={1} mr={1}>
              VS
            </Typography>
            <Typography mr={1}>{selectedCompare.secondPokemon}</Typography>
            <ArrowForwardOutlinedIcon />
          </Link>
        </Box>
      )}
    </Grid>
  );
};

export default ListPokemon;
