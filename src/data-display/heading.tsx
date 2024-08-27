import React from 'react';
import { ComponentConfig } from '@measured/puck';
import { Typography } from '@mui/material';

export const Heading: ComponentConfig = {
  label: 'Heading',
  fields: {
    title: {
      type: 'text'
    },
    variant: {
      type: 'select',
      options: [
        {
          value: 'h1',
          label: 'H1'
        },
        {
          value: 'h2',
          label: 'H2'
        },
        {
          value: 'h3',
          label: 'H3'
        },
        {
          value: 'h4',
          label: 'H4'
        },
        {
          value: 'h5',
          label: 'H5'
        },
        {
          value: 'h6',
          label: 'H6'
        }
      ]
    },
    align: {
      type: 'select',
      options: [
        {
          value: 'left',
          label: 'Left'
        },
        {
          value: 'center',
          label: 'Center'
        },
        {
          value: 'right',
          label: 'Right'
        },
        {
          value: 'justify',
          label: 'Justify'
        },
        {
          value: 'inherit',
          label: 'Inherit'
        }
      ]
    }
  },
  defaultProps: {
    title: 'Heading',
    variant: 'h1',
    align: 'inherit'
  },
  render: (props) => {
    return (
      <Typography variant={props.variant} align={props.align}>
        {props.title}
      </Typography>
    );
  }
};
