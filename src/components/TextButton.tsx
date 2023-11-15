import React from 'react';
import { Button } from '@mui/material';
import './TextButton.scss';

export const TextButton: React.FC<{
  disabled?: boolean;
  onClick?: () => void;
}> = ({ disabled, onClick, children }) => {
  return (
    <Button
      className="CSVImporter_TextButton"
      variant="contained"
      type="button" // avoid triggering form submit
      disabled={disabled}
      onClick={onClick}
      color="primary"
    >
      {children}
    </Button>
  );
};
