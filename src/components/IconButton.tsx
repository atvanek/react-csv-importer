import React from 'react';
import { Button } from '@material-ui/core';
import './IconButton.scss';
import { ArrowBack } from '@material-ui/icons';

export const IconButton: React.FC<{
  label: string;
  type: 'back' | 'forward' | 'replay' | 'arrowBack' | 'close';
  small?: boolean;
  focusOnly?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}> = ({ type, label, small, focusOnly, disabled, onClick }) => {
  return (
    <Button
      className="CSVImporter_IconButton"
      type="button" // avoid triggering form submit
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      <ArrowBack />
    </Button>
  );
};
