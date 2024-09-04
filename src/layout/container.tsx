import React from 'react';
import { ComponentConfig, DropZone } from '@measured/puck';
import { Container } from '@mui/material';

export interface PContainerProps {
  fixed: boolean;
  maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const PContainer: ComponentConfig<PContainerProps> = {
  label: 'Container',
  fields: {
    fixed: {
      type: 'radio',
      options: [
        { value: true, label: 'Fixed' },
        { value: false, label: 'Fluid' }
      ]
    },
    maxWidth: {
      type: 'select',
      options: [
        { value: 'xs', label: 'Extra Small' },
        { value: 'sm', label: 'Small' },
        { value: 'md', label: 'Medium' },
        { value: 'lg', label: 'Large' },
        { value: 'xl', label: 'Extra Large' }
      ]
    }
  },
  defaultProps: {
    maxWidth: 'lg',
    fixed: false
  },
  render: ({ maxWidth, fixed, id }) => {
    return (
      <Container maxWidth={maxWidth} fixed={fixed}>
        <DropZone zone={`zone-${id}`} />
      </Container>
    );
  }
};
