import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { FilterListContext } from "../../../context/FilterListContext";

const Header: React.FC = () => {
  const {
    filter,
    setIsOpenFilter,
    setIsCompareActive,
    handleResetComparation,
  } = useContext(FilterListContext);

  return (
    <header
      style={{
        position: "fixed",
        zIndex: 99,
        top: 0,
        right: "auto",
        width: "100%",
        maxWidth: 600,
        paddingTop: "16px",
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "16px",
        gap: "12px",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={"2px"}
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleResetComparation();
          setIsCompareActive((prev) => !prev);
        }}
      >
        <Typography>Compare</Typography>
        <CompareArrowsIcon />
      </Box>
      <Box
        position="relative"
        onClick={() => setIsOpenFilter(true)}
        style={{ cursor: "pointer" }}
      >
        <Box
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            padding: "0px 2px",
            right: -2,
            top: -2,
            zIndex: 101,
            position: "absolute",
            backgroundColor: "white",
          }}
        >
          <Typography fontSize={"8px"}>
            {filter.generations.length + filter.types.length}
          </Typography>
        </Box>
        <FilterAltOutlinedIcon />
      </Box>
    </header>
  );
};

export default Header;
