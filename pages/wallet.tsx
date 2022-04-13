import Head from 'next/head';
import React from 'react';
import WalletPage from '../client/pages/WalletPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Galactic Punks</title>
      </Head>
      <WalletPage />
    </div>
  );
}
