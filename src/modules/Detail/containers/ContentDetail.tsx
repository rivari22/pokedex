import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React, { useContext } from "react";
import { URL_IMAGE } from "../../../config/config";
import { TabContext } from "../../../context/TabDetailContext";
import About from "./About";
import BaseStats from "./BaseStats";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      item
      xs={"auto"}
    >
      {children}
    </Grid>
  );
}

type ContentDetailProps = {
  species: any;
};

const ContentDetail: React.FC<ContentDetailProps> = ({ species }) => {
  const { tab } = useContext(TabContext);

  return (
    <>
      <Grid container direction="column" height="100%" paddingTop={3}>
        <Grid item xs={5} position="relative">
          <Image
            alt="pokemon"
            src={`${URL_IMAGE}${species.id}.png`}
            fill
            priority
          />
        </Grid>

        <Grid item xs={"auto"}>
          <Typography
            textAlign="center"
            color="white"
            fontSize="22px"
            fontWeight={700}
            textTransform="capitalize"
          >
            {species.name}
          </Typography>
        </Grid>

        <TabPanel value={tab} index={0}>
          <About
            pokemons={species.pokemons?.[0]}
            description={species.description?.[0]?.flavor_text || ""}
          />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <BaseStats stats={species.pokemons?.[0]?.stats} />
        </TabPanel>
      </Grid>
    </>
  );
};

export default ContentDetail;
