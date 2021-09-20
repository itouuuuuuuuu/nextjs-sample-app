import React from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

// https://github.com/vercel/next.js/issues/4515#issuecomment-447570395
const App = ({ Component, pageProps }: AppProps) => {
  const SafeHydrate = dynamic(
    () => import('../components/SafeHydrate') as any,
    { ssr: false }
  );

  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
};

export default App;
