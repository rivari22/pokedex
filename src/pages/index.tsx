import Image from "next/image";
import { URL_IMAGE } from "../config/config";
import { useQuery } from "@apollo/client";
import { GET_LIST_POKEMON } from "../modules/Home/graphql/queries";
import PaperMaterialUI from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InfiniteScroll from "react-infinite-scroll-component";
import { Chip, Stack, Typography } from "@mui/material";

export default function Home() {
  const { data, fetchMore } = useQuery(GET_LIST_POKEMON, {
    variables: {
      offset: 0,
      limit: 20,
    },
  });

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        offset: data?.gen3_species?.length,
        limit: 20,
      },
      updateQuery: (prev, { fetchMoreResult }: { fetchMoreResult?: any }) => {
        console.log(fetchMoreResult, "fetchMoreResult");
        if (!fetchMoreResult) return prev;

        return {
          gen3_species: [...prev.gen3_species, ...fetchMoreResult.gen3_species],
        };
      },
    });
  };

  console.log(data, "data");
  return (
    <InfiniteScroll
      dataLength={data?.gen3_species?.length || 0}
      next={handleFetchMore}
      scrollThreshold={1}
      // should fix style
      style={{
        backgroundColor: "GrayText",
        position: "relative",
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
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
          padding={2}
          component={"section"}
          style={{ flexBasis: "50%" }}
        >
          <PaperMaterialUI
            elevation={4}
            style={{ padding: 10, borderRadius: 20 }}
          >
            <Grid container item height={100} flexWrap="wrap">
              <Grid item xs={7}>
                <Typography noWrap>{item.name}</Typography>
                <Stack direction="column" spacing={1} mt={"4px"}>
                  {item.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemontypes?.map(
                    (
                      type: { pokemon_v2_type: { name: string } },
                      idx: number
                    ) => (
                      <Chip
                        label={type.pokemon_v2_type.name}
                        color="primary"
                        key={idx}
                        size={"small"}
                        style={{
                          width: "fit-content",
                          padding: "0px 6px 2px 6px",
                          // background: should edit background color
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
                    // width={80}
                    // height={80}
                    // style={{ height: "50%"}}
                  />
                </Grid>
              </Grid>
            </Grid>
          </PaperMaterialUI>
        </Grid>
      ))}
    </InfiniteScroll>
  );
}
