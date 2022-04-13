import Head from 'next/head';
import React from 'react';
import PunksCollectionPage from '../../../client/pages/PunksCollectionPage';

export default function BrowseCollection() {
  return (
    <div>
      <Head>
        <title>Galactic Punks | Punks Collection</title>
      </Head>
      <PunksCollectionPage />
    </div>
  );
}
