import { ComponentConfig } from '@measured/puck';
import { Typography } from '@mui/material';

export interface PTypographyProps {
  text: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'caption';
  align: 'left' | 'center' | 'right' | 'justify' | 'inherit';
}

export const PTypography: ComponentConfig<PTypographyProps> = {
  label: 'Typography',
  fields: {
    text: {
      type: 'textarea'
    },
    variant: {
      type: 'select',
      options: [
        { value: 'h1', label: 'H1' },
        { value: 'h2', label: 'H2' },
        { value: 'h3', label: 'H3' },
        { value: 'h4', label: 'H4' },
        { value: 'h5', label: 'H5' },
        { value: 'h6', label: 'H6' },
        { value: 'body1', label: 'Body 1' },
        { value: 'body2', label: 'Body 2' },
        { value: 'subtitle1', label: 'Subtitle 1' },
        { value: 'caption', label: 'Caption' }
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
    text: 'Text',
    variant: 'body1',
    align: 'inherit'
  },
  render: ({ text, variant, align }) => {
    return (
      <Typography variant={variant} align={align}>
        {text}
      </Typography>
    );
  }
};
