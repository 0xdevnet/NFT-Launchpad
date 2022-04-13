import React from 'react';
import {
  Button,
  ButtonProps,
  CircularProgress,
  CircularProgressProps,
} from '@mui/material';

type Props = ButtonProps & {
  loading?: boolean; // Shows a circular progress spinner if true
  progressProps?: CircularProgressProps;
};

/**
 * A button that has an additional render state for loading
 */
const ProgressButton: React.FC<Props> = ({
  loading,
  progressProps,
  disabled,
  ...rest
}) => {
  return (
    <Button
      startIcon={
        loading ? (
          <CircularProgress size={16} color="inherit" {...progressProps} />
        ) : undefined
      }
      disabled={loading || disabled}
      {...rest}
    />
  );
};

export default ProgressButton;
