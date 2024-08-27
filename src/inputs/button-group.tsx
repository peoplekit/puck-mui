import React from 'react';
import { ComponentConfig } from '@measured/puck';
import { ButtonGroup as MUIButtonGroup, Button as MUIButton } from '@mui/material';
import { Button } from './button';

export const ButtonGroup: ComponentConfig = {
  label: 'Button Group',
  fields: {
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
        }
      ]
    },
    color: {
      label: 'Color',
      type: 'select',
      options: [
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
    orientation: {
      type: 'select',
      label: 'Orientation',
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
    },
    buttons: {
      type: 'array',
      label: 'Buttons',
      arrayFields: {
        ...Button.fields
      }
    }
  },
  defaultProps: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    orientation: 'inherit',
    buttons: [Button.defaultProps]
  },
  render: (props) => {
    return (
      <MUIButtonGroup variant={props.variant} color={props.color} size={props.size} orientation={props.orientation}>
        {props.buttons.map((button: any, index: number) => (
          <MUIButton key={index} {...button} />
        ))}
      </MUIButtonGroup>
    );
  }
};
