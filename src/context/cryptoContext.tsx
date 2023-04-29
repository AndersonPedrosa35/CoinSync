import React, { createContext, useContext, useState } from 'react';

export const CryptoContext = createContext<any>({ cryptos: [], setCryptos: () => {} });

export default function ProviderCryptos({ children }: { children: JSX.Element }) {
  const [cryptos, setCryptos] = useState([])
  const value = {
    cryptos,
    setCryptos
  }

  return (
    <CryptoContext.Provider value={value}>
      {children}
    </CryptoContext.Provider>
  );
}