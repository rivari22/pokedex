import { Tab, Tabs } from "@mui/material";
import React, { useContext } from "react";
import { TabContext } from "../../../context/TabDetailContext";

type Props = {};

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const BottomNavigation: React.FC<Props> = (props) => {
  const { tab, setTab } = useContext(TabContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setTab(index);
  };

  return (
    <Tabs
      value={tab}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      aria-label="full width tabs example"
      style={{
        position: "fixed",
        zIndex: 99,
        bottom: 0,
        left: "auto",
        width: "100%",
        maxWidth: 600,
        backgroundColor: "white",
      }}
    >
      <Tab label="About" {...a11yProps(0)} />
      <Tab label="Base Stats" {...a11yProps(1)} />
    </Tabs>
  );
};

export default BottomNavigation;
