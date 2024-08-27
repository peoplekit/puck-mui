import { Config } from "@measured/puck";
import { Heading, Paragraph } from "./data-display";
import { Container } from "./layout";

export const config: Config = {
  components: {
    container: Container,
    heading: Heading,
    paragraph: Paragraph
  },
  categories: {
    layout: {
      title: "Layout",
      components: ["container"]
    },
    "data-display": {
      title: "Data Display",
      components: ["heading", "paragraph"]
    }
  }
};
