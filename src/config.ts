import { Config } from '@measured/puck';
import { Divider, Heading, Paragraph } from './data-display';
import { Container } from './layout';
import { Paper } from './surface';
import { Button, ButtonGroup } from './inputs';

export const config: Config = {
  components: {
    button: Button,
    'button-group': ButtonGroup,
    container: Container,
    heading: Heading,
    paper: Paper,
    paragraph: Paragraph,
    divider: Divider
  },
  categories: {
    'data-display': {
      title: 'Data Display',
      components: ['heading', 'paragraph', 'divider']
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
      components: ['paper']
    }
  }
};
