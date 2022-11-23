import { Grid, styled, Theme, Typography } from "@mui/material";
import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

type BaseStatsProps = {
  stats: Array<{
    base_stat: number;
    stat: { name: string };
  }>;
};

const BorderLinearProgress = styled(LinearProgress)(
  ({ theme }: { theme?: Theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme?.palette.grey[theme?.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme?.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  })
);

const BaseStats: React.FC<BaseStatsProps> = (props) => {
  return (
    <Grid padding={"0px 16px"}>
      {props.stats?.map((stat, index) => (
        <Grid key={index} mt={2}>
          <Grid container justifyContent="space-between" mb={'2px'}>
            <Grid item>
              <Typography textTransform="capitalize">{stat.stat.name}</Typography>
            </Grid>
            <Grid item>
              <Typography>{stat.base_stat}</Typography>
            </Grid>
          </Grid>
          <BorderLinearProgress variant="determinate" value={stat.base_stat} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BaseStats;
