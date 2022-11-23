import React from "react";
import { GetServerSideProps, NextPage } from "next";

import clientGraphql from "../../config/graphqlSetup";
import { GET_DETAIL_COMPARE_POKEMON } from "../../modules/DetailComparation/graphql/queries";
import Header from "../../components/Header/Header";
import DetailContentComparation from "../../modules/DetailComparation/containers/DetailContentComparation";

type DetailPokemonComparationProps = {
  data: any;
};

const DetailPokemonComparation: NextPage<DetailPokemonComparationProps> = ({
  data,
}) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Header />
      <DetailContentComparation
        firstPokemon={data?.firstPokemon?.[0]}
        secondPokemon={data?.secondPokemon?.[0]}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res, query } = context;

  const { data } = await clientGraphql.query({
    query: GET_DETAIL_COMPARE_POKEMON,
    variables: {
      pokemonName1: query?.name?.[0],
      pokemonName2: query?.name?.[1],
    },
  });

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      data,
    },
  };
};

export default DetailPokemonComparation;
