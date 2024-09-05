import { ComponentConfig } from '@measured/puck';
import { Typography as MUITypography } from '@mui/material';

export interface PHeadingProps {
  text: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align: 'left' | 'center' | 'right' | 'justify' | 'inherit';
}

export const PHeading: ComponentConfig<PHeadingProps> = {
  label: 'Heading',
  fields: {
    text: {
      type: 'text'
    },
    variant: {
      type: 'select',
      options: [
        { value: 'h1', label: 'H1' },
        { value: 'h2', label: 'H2' },
        { value: 'h3', label: 'H3' },
        { value: 'h4', label: 'H4' },
        { value: 'h5', label: 'H5' },
        { value: 'h6', label: 'H6' }
      ]
    },
    align: {
      type: 'radio',
      options: [
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
        { value: 'inherit', label: 'Inherit' }
      ]
    }
  },
  defaultProps: {
    text: 'Heading',
    variant: 'h1',
    align: 'inherit'
  },
  render: ({ text, variant, align }) => {
    return (
      <MUITypography variant={variant} align={align}>
        {text}
      </MUITypography>
    );
  }
};
