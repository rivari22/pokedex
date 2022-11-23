import React from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();

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
      <Box display="flex" alignItems="center" gap={"2px"}>
        <Typography>Compare</Typography>
        <CompareArrowsIcon />
      </Box>
      <Box>
        <FilterAltIcon />
      </Box>
    </header>
  );
};

export default Header;
