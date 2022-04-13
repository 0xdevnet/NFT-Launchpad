import React from 'react';
import { Button, Stack, StackProps } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SyncIcon from '@mui/icons-material/Sync';

type Props = {
  randomPunkButtonClicked(): void;
  filterButtonClicked(): void;
} & StackProps;

const SearchOptionsBar: React.FC<Props> = ({
  randomPunkButtonClicked,
  filterButtonClicked,
  ...rest
}) => {
  return (
    <Stack direction="row-reverse" spacing={2} {...rest}>
      <Button
        startIcon={<FilterListIcon />}
        onClick={filterButtonClicked}
        variant="outlined"
      >
        Filter
      </Button>
      <Button
        startIcon={<SyncIcon />}
        onClick={randomPunkButtonClicked}
        variant="outlined"
      >
        Random Punk
      </Button>
    </Stack>
  );
};

export default SearchOptionsBar;
