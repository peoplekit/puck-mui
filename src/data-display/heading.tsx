import React from "react";
import { ComponentConfig } from "@measured/puck";
import { Typography } from "@mui/material";

export interface HeadingProps {
  title: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading: ComponentConfig = {
  fields: {
    title: {
      type: "text"
    },
    variant: {
      type: "select",
      options: [
        {
          value: "h1",
          label: "H1"
        },
        {
          value: "h2",
          label: "H2"
        },
        {
          value: "h3",
          label: "H3"
        },
        {
          value: "h4",
          label: "H4"
        },
        {
          value: "h5",
          label: "H5"
        },
        {
          value: "h6",
          label: "H6"
        }
      ]
    }
  },
  render: (props) => {
    return <Typography variant={props.variant}>{props.title}</Typography>;
  }
};
