import React, { useState } from "react";

type TabContextType = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};

export const TabContext = React.createContext<TabContextType>({
  tab: 0,
  setTab: () => undefined,
});

const TabDetailContext = ({ children }: { children: React.ReactNode }) => {
  const [tab, setTab] = useState(0);

  const contextValue = {
    tab,
    setTab,
  };

  return (
    <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
  );
};

export default TabDetailContext;
