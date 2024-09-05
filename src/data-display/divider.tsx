import React from 'react';
import { ComponentConfig } from '@measured/puck';
import { Divider } from '@mui/material';

export interface PDividerProps {
  variant: 'fullWidth' | 'inset' | 'middle';
  orientation: 'horizontal' | 'vertical';
}

export const PDivider: ComponentConfig<PDividerProps> = {
  label: 'Divider',
  fields: {
    variant: {
      type: 'radio',
      options: [
        { label: 'Full Width', value: 'fullWidth' },
        { label: 'Inset', value: 'inset' },
        { label: 'Middle', value: 'middle' }
      ]
    },
    orientation: {
      type: 'radio',
      options: [
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' }
      ]
    }
  },
  defaultProps: {
    variant: 'fullWidth',
    orientation: 'horizontal'
  },
  render: ({ variant, orientation }) => {
    return <Divider variant={variant} orientation={orientation} />;
  }
};
