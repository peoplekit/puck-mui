import React from 'react';
import { ComponentConfig, DropZone } from '@measured/puck';
import { Card, CardContent, CardHeader } from '@mui/material';

export interface PCardProps {
  title: string;
}

export const PCard: ComponentConfig<PCardProps> = {
  label: 'Card',
  fields: {
    title: {
      label: 'Content',
      type: 'text'
    }
  },
  defaultProps: {
    title: 'Card Title'
  },
  render: ({ title, id }) => {
    return (
      <Card>
        {title && <CardHeader title={title} />}
        <CardContent>
          <DropZone zone={`zone-${id}`} />
        </CardContent>
      </Card>
    );
  }
};
