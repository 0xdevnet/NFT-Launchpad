import Head from 'next/head';
import React from 'react';
import CanvasBackground from '../client/components/CanvasBackground';
import HomePage from '../client/pages/HomePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Galactic Punks | 10,921 Unique NFTs on Terra</title>
      </Head>
      <CanvasBackground />
      <HomePage />
    </div>
  );
}
