import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../../styles/color";

type AboutProps = {
  pokemons: any;
  description: string;
};

const About: React.FC<AboutProps> = ({ pokemons, description }) => {
  return (
    <div>
      <Box
        style={{
          backgroundColor:
            COLORS?.[pokemons.types[0].type.name]?.background ||
            COLORS.default.background,
          padding: 16,
          margin: "0px 16px",
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography
              textAlign="center"
              color="white"
              fontSize="14px"
              fontWeight={700}
            >
              {pokemons.weight / 1000} KG
            </Typography>
            <Typography
              textAlign="center"
              color="white"
              fontSize="12px"
              fontWeight={300}
            >
              WEIGHT
            </Typography>
          </Grid>
          <Grid item container width="auto" justifyContent="center">
            {pokemons.types?.map((value: any, idx: number) => (
              <Grid item key={idx}>
                <Box
                  style={{
                    borderRadius: "50%",
                    width: "16px",
                    height: "16px",
                    backgroundColor:
                      COLORS?.[value.type.name]?.base || COLORS.default.base,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></Box>
                <Typography
                  textAlign="center"
                  color="white"
                  fontSize="12px"
                  fontWeight={300}
                  mt={"5px"}
                  ml={idx > 0 ? "2px" : 0}
                  textTransform="uppercase"
                >
                  {`${idx > 0 ? "/ " : ""}${value.type.name}`}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Typography
              textAlign="center"
              color="white"
              fontSize="14px"
              fontWeight={700}
            >
              {pokemons.height / 100} M
            </Typography>
            <Typography
              textAlign="center"
              color="white"
              fontSize="12px"
              fontWeight={300}
            >
              HEIGHT
            </Typography>
          </Grid>
        </Grid>
        <Grid mt={2}>
          <Typography
            textAlign="center"
            color="white"
            fontSize="12px"
            fontWeight={300}
          >
            ABOUT
          </Typography>
          <Typography
            color="white"
            textAlign="center"
            fontSize="14px"
            fontWeight={700}
          >
            {description}
          </Typography>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
