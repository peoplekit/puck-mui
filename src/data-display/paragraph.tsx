import React from 'react';
import { ComponentConfig } from '@measured/puck';
import { Typography } from '@mui/material';

export interface PParagraphProps {
  text: string;
  variant: 'body1' | 'body2' | 'subtitle1' | 'caption' | 'inherit';
  align: 'left' | 'center' | 'right' | 'justify' | 'inherit';
}

export const PParagraph: ComponentConfig<PParagraphProps> = {
  label: 'Paragraph',
  fields: {
    text: {
      type: 'textarea'
    },
    variant: {
      type: 'select',
      options: [
        { value: 'body1', label: 'Body 1' },
        { value: 'body2', label: 'Body 2' },
        { value: 'subtitle1', label: 'Subtitle 1' },
        { value: 'caption', label: 'Caption' },
        { value: 'inherit', label: 'Inherit' }
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
