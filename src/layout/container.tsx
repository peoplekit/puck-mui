import React from 'react';
import { ComponentConfig, DropZone } from '@measured/puck';
import { Container as MUIContainer } from '@mui/material';

export const Container: ComponentConfig = {
  label: 'Container',
  fields: {
    fixed: {
      type: 'radio',
      options: [
        {
          value: true,
          label: 'Fixed'
        },
        {
          value: false,
          label: 'Fluid'
        }
      ]
    },
    maxWidth: {
      type: 'select',
      options: [
        {
          value: 'xs',
          label: 'Extra Small'
        },
        {
          value: 'sm',
          label: 'Small'
        },
        {
          value: 'md',
          label: 'Medium'
        },
        {
          value: 'lg',
          label: 'Large'
        },
        {
          value: 'xl',
          label: 'Extra Large'
        }
      ]
    }
  },
  defaultProps: {
    maxWidth: 'lg',
    fixed: false
  },
  render: (props) => {
    return (
      <MUIContainer maxWidth={props.maxWidth} fixed={props.fixed}>
        <DropZone zone={`zone-${props.id}`} />
      </MUIContainer>
    );
  }
};
