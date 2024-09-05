import { ComponentConfig, DropZone } from '@measured/puck';
import { Grid } from '@mui/material';

export type PColumnsProps = {
  spacing: number;
  distribution: 'auto' | 'manual';
  columns: {
    span?: number;
  }[];
};

export const PColumns: ComponentConfig<PColumnsProps> = {
  label: 'Columns',
  fields: {
    spacing: {
      type: 'number',
      label: 'Spacing',
      min: 0
    },
    distribution: {
      type: 'radio',
      options: [
        { value: 'auto', label: 'Auto' },
        { value: 'manual', label: 'Manual' }
      ]
    },
    columns: {
      type: 'array',
      getItemSummary: (col, id = -1) => `Column ${id + 1}, span ${col.span ? Math.max(Math.min(col.span, 12), 1) : 'auto'}`,
      arrayFields: {
        span: {
          label: 'Span (1-12)',
          type: 'number',
          min: 1,
          max: 12
        }
      }
    }
  },
  defaultProps: {
    spacing: 2,
    distribution: 'auto',
    columns: [{}, {}]
  },
  render: ({ columns, distribution, spacing }) => {
    return (
      <Grid
        container
        spacing={spacing}
        style={{
          gridTemplateColumns: distribution === 'manual' ? 'repeat(12, 1fr)' : `repeat(${columns.length}, 1fr)`
        }}
      >
        {columns.map(({ span }, idx) => (
          <Grid
            item
            key={idx}
            xs={
              distribution === 'manual' && span
                ? Math.max(Math.min(span, 12), 1) // If manual, set the span between 1 and 12
                : true // If auto, let MUI automatically size the columns
            }
          >
            <DropZone zone={`column-${idx}`} disallow={['Columns']} />
          </Grid>
        ))}
      </Grid>
    );
  }
};
