import React from "react";
import { ComponentConfig } from "@measured/puck";
import { Typography } from "@mui/material";

export interface HeadingProps {
  title: string;
}

export const Heading: ComponentConfig<HeadingProps> = {
  fields: {
    title: {
      type: "text"
    }
  },
  render: ({ title }) => {
    return <Typography variant='h1'>{title}</Typography>;
  }
};
