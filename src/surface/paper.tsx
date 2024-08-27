import React from 'react';
import { ComponentConfig, DropZone } from '@measured/puck';
import { Paper as MUIPaper } from '@mui/material';

export const Paper: ComponentConfig = {
  label: 'Paper',
  fields: {
    variant: {
      type: 'radio',
      options: [
        {
          value: 'elevation',
          label: 'Elevated'
        },
        {
          value: 'outlined',
          label: 'Outlined'
        }
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
        {
          value: true,
          label: 'Square'
        },
        {
          value: false,
          label: 'Rounded'
        }
      ]
    }
  },
  defaultProps: {
    variant: 'elevation',
    elevation: 1,
    square: false
  },
  render: (props) => {
    return (
      <MUIPaper variant={props.varient} square={props.squre} elevation={props.elevation}>
        <DropZone zone={`zone-${props.id}`} />
      </MUIPaper>
    );
  }
};
