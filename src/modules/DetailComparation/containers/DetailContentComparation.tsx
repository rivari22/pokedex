import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { URL_IMAGE } from "../../../config/config";
import BaseStats from "../../Detail/containers/BaseStats";

type DetailContentComparationProps = {
  firstPokemon: any;
  secondPokemon: any;
};

const DetailContentComparation: React.FC<DetailContentComparationProps> = ({
  firstPokemon,
  secondPokemon,
}) => {
  return (
    <Box pt={6}>
      <Grid
        container
        height="100%"
        width="100%"
        minHeight={"200px"}
        justifyContent="space-around"
      >
        <Grid item xs={5} position="relative">
          <Image
            alt="pokemon1"
            src={`${URL_IMAGE}${firstPokemon?.id}.png`}
            fill
          />
        </Grid>
        <Typography textAlign={'center'} mt="auto" mb="auto">VS</Typography>
        <Grid item xs={5} position="relative">
          <Image
            alt="pokemon2"
            src={`${URL_IMAGE}${secondPokemon?.id}.png`}
            fill
          />
        </Grid>
      </Grid>
      <Grid container height="100%" width="100%" justifyContent="space-around">
        <Grid item xs={5}>
          <Typography textAlign="center" textTransform="capitalize">{firstPokemon?.name}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography textAlign="center" textTransform="capitalize">{secondPokemon?.name}</Typography>
        </Grid>
      </Grid>
      <Grid container height="100%" width="100%" justifyContent="space-around">
        <Grid item xs={5}>
          <BaseStats stats={firstPokemon?.pokemons?.[0]?.stats || []} />
        </Grid>
        <Grid item xs={5}>
          <BaseStats stats={secondPokemon?.pokemons?.[0]?.stats || []} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailContentComparation;
