import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

type HeaderProps = {
  onClickArrowBack?: () => void;
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ onClickArrowBack, title }) => {
  const router = useRouter();

  return (
    <header
      style={{
        position: "fixed",
        zIndex: 99,
        top: 0,
        left: "auto",
        width: "100%",
        maxWidth: 600,
        padding: "4px 16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <KeyboardBackspaceIcon
        onClick={() => {
          if (onClickArrowBack) {
            return onClickArrowBack();
          }

          router.back();
        }}
        fontSize={"large"}
      />
      {!!title && <Typography ml={"4px"}>{title}</Typography>}
    </header>
  );
};

export default Header;
