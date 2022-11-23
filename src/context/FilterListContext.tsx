import React, { useCallback, useState } from "react";

export type FilterType = {
  types: Array<number>;
  generations: Array<number>;
};

export type compareType = {
  firstPokemon: string;
  secondPokemon: string;
};

type FilterList = {
  isOpenFilter: boolean;
  setIsOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  handleResetFilter: () => void;
  selectedCompare: compareType;
  setSelectedCompare: React.Dispatch<React.SetStateAction<compareType>>;
  isCompareActive: boolean;
  setIsCompareActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleResetComparation: () => void;
};

export const FilterListContext = React.createContext<FilterList>({
  isOpenFilter: false,
  setIsOpenFilter: () => undefined,
  filter: {
    types: [],
    generations: [],
  },
  setFilter: () => undefined,
  handleResetFilter: () => undefined,
  selectedCompare: {
    firstPokemon: "",
    secondPokemon: "",
  },
  setSelectedCompare: () => undefined,
  isCompareActive: false,
  setIsCompareActive: () => undefined,
  handleResetComparation: () => undefined,
});

const FilterListHomeContext = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<FilterType>({
    types: [],
    generations: [],
  });
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isCompareActive, setIsCompareActive] = useState<boolean>(false);
  const [selectedCompare, setSelectedCompare] = useState<{
    firstPokemon: string;
    secondPokemon: string;
  }>({
    firstPokemon: "",
    secondPokemon: "",
  });

  const handleResetFilter = useCallback(() => {
    setFilter({
      types: [],
      generations: [],
    });
  }, []);

  const handleResetComparation = useCallback(() => {
    setSelectedCompare({
      firstPokemon: "",
      secondPokemon: "",
    });
  }, []);

  const contextValue = {
    isOpenFilter,
    setIsOpenFilter,
    filter,
    setFilter,
    handleResetFilter,
    selectedCompare,
    setSelectedCompare,
    isCompareActive,
    setIsCompareActive,
    handleResetComparation
  };

  return (
    <FilterListContext.Provider value={contextValue}>
      {children}
    </FilterListContext.Provider>
  );
};

export default FilterListHomeContext;
