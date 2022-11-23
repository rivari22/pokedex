import { Button, Chip, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import Header from "../../../components/Header/Header";
import { FilterListContext } from "../../../context/FilterListContext";

export type listAndGenerationType = {
  id: number;
  name: string;
};

type FilterPageProps = {
  generations: Array<listAndGenerationType>;
  types: Array<listAndGenerationType>;
};

const FilterPage: React.FC<FilterPageProps> = ({ types, generations }) => {
  const { filter, setIsOpenFilter, setFilter } = useContext(FilterListContext);

  const handleChooseFilter = ({
    value,
    type,
    remove,
  }: {
    value: number;
    type: "types" | "generations";
    remove?: boolean;
  }) => {
    setFilter((prev) => {
      let temp = { ...prev };
      if (remove) {
        temp[type] = temp[type].filter((item) => item !== value);
      } else {
        temp[type].push(value);
      }
      return { ...temp };
    });
  };

  const handleClickSave = () => {
    setIsOpenFilter(false);
  };

  return (
    <div>
      <Header
        onClickArrowBack={() => {
          setIsOpenFilter(false);
        }}
        title="Filter"
      />
      <Grid container mt={6}>
        <Grid item>
          <Typography>By Types:</Typography>
          <Grid container item gap={"6px"} mt={1}>
            {types?.map((type) => {
              const isActive = filter.types?.includes(type.id);
              return (
                <Grid item key={type.id}>
                  <Chip
                    label={type.name}
                    size={"small"}
                    color="primary"
                    variant={isActive ? "filled" : "outlined"}
                    style={{
                      width: "fit-content",
                      padding: "0px 6px 2px 6px",
                      textTransform: "capitalize",
                    }}
                    onClick={() =>
                      handleChooseFilter({
                        remove: isActive ? true : false,
                        value: type.id,
                        type: "types",
                      })
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item>
          <Typography>By Generations:</Typography>
          <Grid container item gap={"6px"} mt={1}>
            {generations?.map((generation) => {
              const isActive = filter.generations?.includes(generation.id);
              return (
                <Grid item key={generation.id}>
                  <Chip
                    label={generation.name}
                    size={"small"}
                    color="primary"
                    onClick={() =>
                      handleChooseFilter({
                        remove: isActive ? true : false,
                        value: generation.id,
                        type: "generations",
                      })
                    }
                    variant={isActive ? "filled" : "outlined"}
                    style={{
                      width: "fit-content",
                      padding: "0px 6px 2px 6px",
                      textTransform: "capitalize",
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Button
          variant="contained"
          style={{
            padding: "0px 32px",
            textTransform: "capitalize",
            marginTop: "20px",
          }}
          disabled={!filter.generations.length && !filter.types.length}
          onClick={handleClickSave}
        >
          Save
        </Button>
      </Grid>
    </div>
  );
};

export default FilterPage;
