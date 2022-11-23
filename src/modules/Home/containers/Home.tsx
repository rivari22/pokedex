import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";

import { FilterListContext } from "../../../context/FilterListContext";
import ListPokemon from "./ListPokemons";
import Header from "./Header";
import FilterPage from "./FilterPage";

export type listAndGenerationType = {
  id: number;
  name: string;
};

type HomeProps = {
  data: {
    generations: Array<listAndGenerationType>;
    pokemon_v2_type: Array<listAndGenerationType>;
  };
};
const Home: React.FC<HomeProps> = ({ data }) => {
  const { isOpenFilter } = useContext(FilterListContext);

  return (
    <Grid position="relative">
      {isOpenFilter ? (
        <FilterPage
          generations={data.generations}
          types={data.pokemon_v2_type}
        />
      ) : (
        <>
          <Header />
          <Typography padding={"16px 16px 6px 16px"}>Pokedex</Typography>
          <ListPokemon generations={data.generations} types={data.pokemon_v2_type} />
        </>
      )}
    </Grid>
  );
};

export default Home;
