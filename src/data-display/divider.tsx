import React from 'react';
import { ComponentConfig } from '@measured/puck';
import { Divider as MUIDivider } from '@mui/material';

export const Divider: ComponentConfig = {
  label: 'Divider',
  fields: {
    variant: {
      type: 'radio',
      options: [
        {
          value: 'fullWidth',
          label: 'Full Width'
        },
        {
          value: 'inset',
          label: 'Inset'
        },
        {
          value: 'middle',
          label: 'Middle'
        }
      ]
    },
    orientation: {
      type: 'radio',
      options: [
        {
          value: 'horizontal',
          label: 'Horizontal'
        },
        {
          value: 'vertical',
          label: 'Vertical'
        }
      ]
    }
  },
  defaultProps: {
    variant: 'fullWidth',
    orientation: 'horizontal'
  },
  render: (props) => {
    return <MUIDivider variant={props.variant} orientation={props.orientation} />;
  }
};
