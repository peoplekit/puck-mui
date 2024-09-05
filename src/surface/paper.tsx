import React from 'react';
import { ComponentConfig, DropZone } from '@measured/puck';
import { Paper } from '@mui/material';

export interface PPaperProps {
  variant: 'elevation' | 'outlined';
  elevation: number;
  square: boolean;
}

export const PPaper: ComponentConfig<PPaperProps> = {
  label: 'Paper',
  fields: {
    variant: {
      type: 'radio',
      options: [
        { value: 'elevation', label: 'Elevated' },
        { value: 'outlined', label: 'Outlined' }
      ]
    },
    elevation: {
      type: 'number',
      min: 0,
      max: 24
    },
    square: {
      type: 'radio',
      options: [
        { value: true, label: 'Square' },
        { value: false, label: 'Rounded' }
      ]
    }
  },
  defaultProps: {
    variant: 'elevation',
    elevation: 1,
    square: false
  },
  render: ({ variant, elevation, square, id }) => {
    return (
      <Paper variant={variant} square={square} elevation={elevation}>
        <DropZone zone={`zone-${id}`} />
      </Paper>
    );
  }
};
