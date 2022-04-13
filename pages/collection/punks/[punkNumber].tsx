import Head from 'next/head';
import React from 'react';
import { GetServerSideProps } from 'next';
import { validatePunkNumber } from '../../../client/utils/punks/utils';
import { getLogger } from '../../../util/logger';
import PunkDetailsPage from '../../../client/pages/PunkDetailsPage';
import { PUNKS_COLLECTION_PATH } from '../../../util/pathConstants';

type PunkViewServerSideProps = {
  punkNumber: number;
};

const logger = getLogger('[punkNumber]');

export default function PunkView({ punkNumber }: PunkViewServerSideProps) {
  return (
    <div>
      <Head>
        <title>Galactic Punk #{punkNumber.toFixed(0)}</title>
      </Head>
      <PunkDetailsPage punkNumber={punkNumber} />
    </div>
  );
}

/**
 * Validates the punk umber, redirecting if needed
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { punkNumber } = context.query;

  if (
    !punkNumber ||
    typeof punkNumber !== 'string' ||
    !validatePunkNumber(punkNumber)
  ) {
    return {
      redirect: {
        destination: PUNKS_COLLECTION_PATH,
        permanent: false,
      },
    };
  }
  return {
    props: { punkNumber: Number(punkNumber) },
  };
};
