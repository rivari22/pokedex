import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/router";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props) => {
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
        padding: "4px 16px"
      }}
    >
      <KeyboardBackspaceIcon onClick={() => router.back()} fontSize={"large"} />
    </header>
  );
};

export default Header;
