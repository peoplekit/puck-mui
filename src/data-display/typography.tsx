import React from 'react';
import { ComponentConfig } from '@measured/puck';
import { Typography as MUITypography } from '@mui/material';

export const Typography: ComponentConfig = {
  label: 'Typography',
  fields: {
    text: {
      type: 'textarea'
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
        },
        {
          value: 'body1',
          label: 'Body 1'
        },
        {
          value: 'body2',
          label: 'Body 2'
        },
        {
          value: 'subtitle1',
          label: 'Subtitle 1'
        },
        {
          value: 'caption',
          label: 'Caption'
        },
        {
          value: 'inherit',
          label: 'Inherit'
        },
        {
          value: 'h6',
          label: 'H6'
        }
      ]
    },
    align: {
      type: 'radio',
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
    text: 'Text',
    variant: 'body1',
    align: 'inherit'
  },
  render: (props) => {
    return (
      <MUITypography variant={props.variant} align={props.align}>
        {props.text}
      </MUITypography>
    );
  }
};
