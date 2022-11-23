import React from "react";
import { GetServerSideProps, NextPage } from "next";
import clientGraphql from "../../config/graphqlSetup";
import { GET_DETAIL_POKEMON } from "../../modules/Detail/graphql/queries";
import Header from "../../modules/Detail/containers/Header";
import ContentDetail from "../../modules/Detail/containers/ContentDetail";
import TabDetailContext from "../../context/TabDetailContext";
import BottomNavigation from "../../modules/Detail/containers/BottomNavigation";
import { COLORS } from "../../styles/color";

type DetailPokemonProps = {
  data: any;
};

const DetailPokemon: NextPage<DetailPokemonProps> = ({ data }) => {
  console.log(data, "data props");

  return (
    <div
      style={{
        background:
          COLORS[data?.species?.[0]?.pokemons?.[0]?.types?.[0]?.type?.name]
            ?.base || COLORS.default.base,
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Header />
      <TabDetailContext>
        <ContentDetail species={data?.species?.[0]} />
        <BottomNavigation />
      </TabDetailContext>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res, query } = context;

  const { data } = await clientGraphql.query({
    query: GET_DETAIL_POKEMON,
    variables: {
      name: query?.name,
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

export default DetailPokemon;
