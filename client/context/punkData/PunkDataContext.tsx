import React, { createContext, useContext } from 'react';
import { useTokenIdToPunkNumber } from '../../hooks/punks/useTokenIdToPunkNumber';

/**
 * Common functions to access data related to GP's
 */
type PunkDataContextState = {
  tokenIdToPunkNumber: Record<string, number>;
};

export const PunkDataContext = createContext<PunkDataContextState>(
  {} as unknown as PunkDataContextState
);

export const PunkDataContextProvider: React.FC = ({ children }) => {
  const { mapping: tokenIdToPunkNumber } = useTokenIdToPunkNumber();

  const contextState: PunkDataContextState = {
    tokenIdToPunkNumber: tokenIdToPunkNumber ?? {},
  };

  return (
    <PunkDataContext.Provider value={contextState}>
      {children}
    </PunkDataContext.Provider>
  );
};

export const usePunkDataContext = () => {
  return useContext(PunkDataContext);
};
