import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { Send } from '@mui/icons-material';

type Props = {} & ButtonProps;

const SendPunkButton: React.FC<Props> = ({ ...rest }) => {
  return (
    <Button variant="outlined" startIcon={<Send />} {...rest}>
      Send
    </Button>
  );
};

export default SendPunkButton;
