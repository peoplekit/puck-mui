import { Config } from '@measured/puck';
import { PDivider, PHeading, PParagraph, PTypography } from './data-display';
import { Container } from './layout';
import { Accordion, Paper } from './surface';
import { Button, ButtonGroup } from './inputs';

export const config = {
  components: {
    accordion: Accordion,
    button: Button,
    'button-group': ButtonGroup,
    container: Container,
    divider: PDivider,
    heading: PHeading,
    paper: Paper,
    paragraph: PParagraph,
    typography: PTypography
  },
  categories: {
    'data-display': {
      title: 'Data Display',
      components: ['divider', 'heading', 'paragraph', 'typography']
    },
    inputs: {
      title: 'Inputs',
      components: ['button', 'button-group']
    },
    layout: {
      title: 'Layout',
      components: ['container']
    },
    surface: {
      title: 'Surface',
      components: ['accordion', 'paper']
    }
  }
};
