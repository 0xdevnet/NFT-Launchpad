import type { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';

import { AppThemeContextProvider } from '../client/context/view/AppThemeContext';
import { PunkDataContextProvider } from '../client/context/punkData/PunkDataContext';
import TerraWalletContextProvider from '../client/context/terraWallet/TerraWalletContextProvider';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache, pageProps } = props;
  return (
    <AppThemeContextProvider emotionCache={emotionCache}>
      <TerraWalletContextProvider>
        <PunkDataContextProvider>
          <Component {...pageProps} />
        </PunkDataContextProvider>
      </TerraWalletContextProvider>
    </AppThemeContextProvider>
  );
}
