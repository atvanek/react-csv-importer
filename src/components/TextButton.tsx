import React from 'react';
import { Button } from '@material-ui/core';
import './TextButton.scss';

export const TextButton: React.FC<{
  disabled?: boolean;
  onClick?: () => void;
}> = ({ disabled, onClick, children }) => {
  return (
    <Button
      className="CSVImporter_TextButton"
      type="button" // avoid triggering form submit
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
