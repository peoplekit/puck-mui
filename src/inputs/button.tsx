import React from 'react';
import { ComponentConfig } from '@measured/puck';
import { Button as MUIButton } from '@mui/material';

export const Button: ComponentConfig = {
  label: 'Button',
  fields: {
    children: {
      label: 'Button Text',
      type: 'text'
    },
    variant: {
      label: 'Variant',
      type: 'radio',
      options: [
        {
          value: 'contained',
          label: 'Contained'
        },
        {
          value: 'outlined',
          label: 'Outlined'
        },
        {
          value: 'text',
          label: 'Text'
        },
        {
          value: 'inherit',
          label: 'Inherit'
        }
      ]
    },
    color: {
      label: 'Color',
      type: 'select',
      options: [
        {
          value: 'default',
          label: 'Default'
        },
        {
          value: 'primary',
          label: 'Primary'
        },
        {
          value: 'secondary',
          label: 'Secondary'
        },
        {
          value: 'error',
          label: 'Error'
        },
        {
          value: 'warning',
          label: 'Warning'
        },
        {
          value: 'info',
          label: 'Info'
        },
        {
          value: 'success',
          label: 'Success'
        }
      ]
    },
    size: {
      label: 'Size',
      type: 'radio',
      options: [
        {
          value: 'small',
          label: 'Small'
        },
        {
          value: 'medium',
          label: 'Medium'
        },
        {
          value: 'large',
          label: 'Large'
        }
      ]
    },
    fullWidth: {
      type: 'select',
      label: 'Full Width',
      options: [
        {
          value: true,
          label: 'True'
        },
        {
          value: false,
          label: 'False'
        }
      ]
    },
    disableElevation: {
      type: 'select',
      label: 'Disable Elevation',
      options: [
        {
          value: true,
          label: 'True'
        },
        {
          value: false,
          label: 'False'
        }
      ]
    }
  },
  defaultProps: {
    children: 'Button'
  },
  render: (props) => {
    return (
      <MUIButton variant={props.variant} color={props.color} size={props.size} fullWidth={props.fullWidth} disableElevation={props.disableElevation}>
        {props.children}
      </MUIButton>
    );
  }
};
