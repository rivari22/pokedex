import Image from "next/image";
import { useQuery } from "@apollo/client";
import PaperMaterialUI from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InfiniteScroll from "react-infinite-scroll-component";
import { Chip, Stack, Typography } from "@mui/material";
import Link from "next/link";

import {
  GET_LIST_POKEMON,
  GET_LIST_TYPE_GENERATION,
} from "../modules/Home/graphql/queries";
import { COLORS } from "../styles/color";
import { URL_IMAGE } from "../config/config";
import Header from "../modules/Home/containers/Header";
import FilterListHomeContext from "../context/FilterListContext";
import ListPokemon from "../modules/Home/containers/ListPokemons";
import clientGraphql from "../config/graphqlSetup";
import { GetStaticProps } from "next";
import Home from "../modules/Home/containers/Home";
import { listAndGenerationType } from "../modules/Home/containers/FilterPage";

type HomeProps = {
  data: {
    generations: Array<listAndGenerationType>;
    pokemon_v2_type: Array<listAndGenerationType>;
  };
};

export default function Homepage({ data }: HomeProps) {
  return (
    <FilterListHomeContext>
      <Home data={data} />
    </FilterListHomeContext>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await clientGraphql.query({
    query: GET_LIST_TYPE_GENERATION,
  });

  return { props: { data } };
};
