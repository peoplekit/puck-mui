import { ComponentConfig } from '@measured/puck';
import { ButtonGroup, Button } from '@mui/material';
import { PButton } from './button'; // Import your prefixed PButton

export interface PButtonGroupProps {
  variant: 'contained' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size: 'small' | 'medium' | 'large';
  orientation: 'horizontal' | 'vertical';
  buttons: Array<typeof PButton.defaultProps>;
}

export const PButtonGroup: ComponentConfig<PButtonGroupProps> = {
  label: 'Button Group',
  fields: {
    variant: {
      label: 'Variant',
      type: 'radio',
      options: [
        { value: 'contained', label: 'Contained' },
        { value: 'outlined', label: 'Outlined' },
        { value: 'text', label: 'Text' }
      ]
    },
    color: {
      label: 'Color',
      type: 'select',
      options: [
        { value: 'primary', label: 'Primary' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'error', label: 'Error' },
        { value: 'warning', label: 'Warning' },
        { value: 'info', label: 'Info' },
        { value: 'success', label: 'Success' }
      ]
    },
    size: {
      label: 'Size',
      type: 'radio',
      options: [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' }
      ]
    },
    orientation: {
      type: 'select',
      label: 'Orientation',
      options: [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' }
      ]
    },
    buttons: {
      type: 'array',
      label: 'Buttons',
      arrayFields: {
        ...PButton.fields // Use fields from PButton
      }
    }
  },
  defaultProps: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    orientation: 'horizontal',
    buttons: [PButton.defaultProps] // Use default props from PButton
  },
  render: ({ variant, color, size, orientation, buttons }) => {
    return (
      <ButtonGroup variant={variant} color={color} size={size} orientation={orientation}>
        {buttons.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </ButtonGroup>
    );
  }
};
