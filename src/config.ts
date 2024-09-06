import { PDivider, PHeading, PParagraph, PTypography } from './data-display';
import { PColumns, PContainer } from './layout';
import { PAccordion, PCard, PPaper } from './surface';
import { PButton, PButtonGroup } from './inputs';

export const config = {
  components: {
    accordion: PAccordion,
    button: PButton,
    'button-group': PButtonGroup,
    card: PCard,
    columns: PColumns,
    container: PContainer,
    divider: PDivider,
    heading: PHeading,
    paper: PPaper,
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
      components: ['columns', 'container']
    },
    surface: {
      title: 'Surface',
      components: ['accordion', 'card', 'paper']
    }
  }
};
