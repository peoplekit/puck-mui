import { ComponentConfig, DropZone, Fields } from '@measured/puck';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { PTypography, PTypographyProps } from '../data-display';

export interface PAccordionProps extends PTypographyProps {
  defaultExpanded: boolean;
  disableGutters: boolean;
  body: string;
}

export const PAccordion: ComponentConfig<PAccordionProps> = {
  label: 'Accordion',
  fields: {
    ...(PTypography.fields as Fields<PTypographyProps>),
    defaultExpanded: {
      label: 'Default Expanded',
      type: 'radio',
      options: [
        { value: true, label: 'Expanded' },
        { value: false, label: 'Collapsed' }
      ]
    },
    disableGutters: {
      label: 'Gutters',
      type: 'radio',
      options: [
        { value: true, label: 'No Gutters' },
        { value: false, label: 'Gutters' }
      ]
    },
    body: {
      label: 'Body',
      type: 'textarea'
    }
  },
  defaultProps: {
    ...(PTypography.defaultProps as PTypographyProps),
    body: 'Accordion Body',
    defaultExpanded: false,
    disableGutters: false
  },
  render: ({ defaultExpanded, disableGutters, id, text, ...typographyProps }) => {
    return (
      <Accordion defaultExpanded={defaultExpanded} disableGutters={disableGutters}>
        <AccordionSummary>
          <Typography {...typographyProps}>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DropZone zone={`zone-${id}`} />
        </AccordionDetails>
      </Accordion>
    );
  }
};
