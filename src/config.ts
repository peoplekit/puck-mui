import { Config } from '@measured/puck';
import { Heading, Paragraph } from './data-display';
import { Container } from './layout';
import { Paper } from './surface';

export const config: Config = {
  components: {
    container: Container,
    heading: Heading,
    paper: Paper,
    paragraph: Paragraph
  },
  categories: {
    layout: {
      title: 'Layout',
      components: ['container']
    },
    'data-display': {
      title: 'Data Display',
      components: ['heading', 'paragraph']
    },
    surface: {
      title: 'Surface',
      components: ['paper']
    }
  }
};
