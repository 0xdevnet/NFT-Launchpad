import Head from 'next/head';
import React from 'react';
import HomePage from '../client/pages/HomePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Galactic Punks | 10,921 Unique NFTs on Terra</title>
      </Head>
      <HomePage />
    </div>
  );
}
