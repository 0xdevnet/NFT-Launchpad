import React, { useEffect, useMemo, useState } from 'react';
import AppPage from '../../components/AppPage';
import {
  Button,
  Pagination,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useFilterByTrait } from '../../hooks/punks/useFilterByTrait';
import NftCardGrid from '../../components/NftCardGrid';
import { ALL_PUNK_NUMBERS } from '../../utils/punks/constants';
import TraitFilterDrawer from './components/TraitFilter/TraitFilterDrawer';
import SearchOptionsBar from './components/SearchOptionsBar';
import { useRouter } from 'next/router';
import CollectionHeader from './components/CollectionHeader';
import PunkCard from '../../components/NftCardGrid/components/PunkCard';
import { PUNKS_COLLECTION_PATH } from '../../../util/pathConstants';

const PAGE_SIZE = 12;

const PunksCollectionPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMediumScreenOrLarger = useMediaQuery(theme.breakpoints.up('sm'));

  const traitFilterState = useFilterByTrait();
  const [showTraitFilters, setShowTraitFilters] = useState(false);

  const validPunkNumbers = useMemo(() => {
    return traitFilterState.matchingPunkNumbers ?? ALL_PUNK_NUMBERS;
  }, [traitFilterState.matchingPunkNumbers]);

  const numTotalPages = useMemo(() => {
    return Math.ceil(validPunkNumbers.length / PAGE_SIZE);
  }, [validPunkNumbers]);

  const isValidPageNumber = (page: number) => {
    return Number.isInteger(page) && page > 0 && page <= numTotalPages;
  };

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Reset current page to first when filters change
    setCurrentPage(1);
  }, [traitFilterState.appliedFilters]);

  const changeCurrentPage = (newPage: number) => {
    if (isValidPageNumber(newPage)) {
      setCurrentPage(newPage);
    }
  };

  const [goToPageValue, setGoToPageValue] = useState(currentPage);
  const changeGoToPageValue = (val: string) => {
    if (isValidPageNumber(Number(val))) {
      setGoToPageValue(Number(val));
    }
  };
  const onGoToPagePressed = () => changeCurrentPage(goToPageValue);

  useEffect(() => {
    setGoToPageValue(currentPage);
  }, [currentPage]);

  // Punk numbers to display
  const punkNumbers = useMemo(() => {
    const startIdx = (currentPage - 1) * PAGE_SIZE;
    const endIdx = startIdx + PAGE_SIZE;

    return validPunkNumbers.slice(startIdx, endIdx);
  }, [currentPage, validPunkNumbers]);

  // Direct to a random punk
  const onRandomPunkClicked = () => {
    router.push(
      PUNKS_COLLECTION_PATH +
        '/' +
        ALL_PUNK_NUMBERS[Math.floor(Math.random() * ALL_PUNK_NUMBERS.length)]
    );
  };

  return (
    <AppPage>
      {/*Header banner*/}
      <CollectionHeader />
      {/*Filter (Temporary, so attached to the window)*/}
      <TraitFilterDrawer
        open={showTraitFilters}
        setOpen={setShowTraitFilters}
        availableFilters={traitFilterState.availableFiltersByType}
        previousFilters={traitFilterState.appliedFilters}
        setTraitFilters={traitFilterState.setAppliedFilters}
        resetTraitFilters={traitFilterState.resetFilters}
      />
      {/*Search options*/}
      <SearchOptionsBar
        randomPunkButtonClicked={onRandomPunkClicked}
        filterButtonClicked={() => setShowTraitFilters(true)}
        mb={2}
      />
      {/*Grid component for all punk cards*/}
      <NftCardGrid>
        {punkNumbers.map((punkNum) => {
          return <PunkCard punkNumber={punkNum} key={punkNum} />;
        })}
      </NftCardGrid>
      {/*Pagination*/}
      {numTotalPages > 1 && (
        <Stack
          direction="row"
          my={4}
          justifyContent={isMediumScreenOrLarger ? 'space-between' : 'center'}
        >
          <Pagination
            size={isMediumScreenOrLarger ? 'large' : 'small'}
            showFirstButton={isMediumScreenOrLarger}
            showLastButton={isMediumScreenOrLarger}
            count={numTotalPages}
            page={currentPage}
            onChange={(_e, v) => changeCurrentPage(v)}
          />
          {isMediumScreenOrLarger && (
            <Stack direction="row" spacing={1}>
              <TextField
                size="small"
                type="number"
                sx={{
                  maxWidth: 128,
                }}
                value={goToPageValue}
                onChange={(e) => changeGoToPageValue(e.currentTarget.value)}
              />
              <Button variant="text" onClick={onGoToPagePressed}>
                Go
              </Button>
            </Stack>
          )}
        </Stack>
      )}
    </AppPage>
  );
};

export default PunksCollectionPage;
