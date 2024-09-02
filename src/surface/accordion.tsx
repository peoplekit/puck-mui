import React from 'react';
import { ComponentConfig, DropZone } from '@measured/puck';
import { Accordion as MUIAccordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Typography as T } from '../data-display/typography';

export const Accordion: ComponentConfig = {
  label: 'Accordion',
  fields: {
    defaultExpanded: {
      label: 'Default Expanded',
      type: 'radio',
      options: [
        {
          value: true,
          label: 'Expanded'
        },
        {
          value: false,
          label: 'Collapsed'
        }
      ]
    },
    disableGutters: {
      label: 'Gutters',
      type: 'radio',
      options: [
        {
          value: true,
          label: 'No Gutters'
        },
        {
          value: false,
          label: 'Gutters'
        }
      ]
    },
    ...T.fields,
  },
  defaultProps: {
    defaultExpanded: false,
    disableGutters: false,
    ...T.defaultProps
  },
  render: (props) => {
    return (
      <MUIAccordion defaultExpanded={props.editMode || props.defaultExpanded} disableGutters={props.disableGutters}>
        <AccordionSummary>
          <Typography {...props} children={props.text}/>
        </AccordionSummary>
        <AccordionDetails>
          <DropZone zone={`zone-${props.id}`} />
        </AccordionDetails>
      </MUIAccordion>
    );
  }
};