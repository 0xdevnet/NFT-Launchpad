import React from 'react';
import { Drawer, DrawerProps } from '@mui/material';
import { TraitFilterProps } from './types';
import TraitFilterContent from './TraitFilterContent';

type Props = {
  open: boolean;
  setOpen(val: boolean): void;
} & TraitFilterProps &
  DrawerProps;

const drawerWidth = 240;
const TraitFilterDrawer: React.FC<Props> = ({
  open,
  setOpen,
  previousFilters,
  availableFilters,
  setTraitFilters,
  resetTraitFilters,
  ...rest
}) => {
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const container =
    typeof window !== 'undefined' ? () => window.document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        width: 250,
      }}
      {...rest}
    >
      <TraitFilterContent
        previousFilters={previousFilters}
        availableFilters={availableFilters}
        setTraitFilters={setTraitFilters}
        resetTraitFilters={resetTraitFilters}
      />
    </Drawer>
  );
};

export default TraitFilterDrawer;
