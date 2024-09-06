# Puck-MUI

<p align="left"> <a aria-label="NPM version" href="https://www.npmjs.com/package/puck-mui"> <img alt="" src="https://img.shields.io/npm/v/puck-mui.svg?style=for-the-badge&labelColor=000000"> </a> <a aria-label="License" href="https://github.com/yourusername/puck-mui/blob/main/LICENSE"> <img alt="" src="https://img.shields.io/npm/l/puck-mui.svg?style=for-the-badge&labelColor=000000"> </a> </p>

A utility library to integrate [Material-UI (MUI)](https://github.com/mui/material-ui) components with [Puck](https://github.com/measuredco/puck), providing pre-built MUI components for use in the Puck visual editor.

## Demo

Visit [https://peoplekit.github.io/puck-mui/](https://peoplekit.github.io/puck-mui/) to try a demo.

View the demo source code [here](https://github.com/peoplekit/puck-mui/tree/main/demo).

## Overview

puck-mui provides a set of ready-to-use Material-UI components that are compatible with the Puck visual editor. These components simplify the integration of MUI into your Puck-based applications, allowing for easy customization and rapid UI development.

## Getting Started

### Step 1: Install Dependencies
First, ensure that you have both [Puck](https://github.com/measuredco/puck) and [Material-UI (MUI)](https://github.com/mui/material-ui) installed in your project. If not follow their getting started documentation.

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Then install `puck-mui`

```bash
npm install puck-mui
```

### Step 2: Configure Puck and puck-mui
In your React app, import and configure puck-mui components along with the Puck editor. Here's a simple example of how to render a Puck editor using Material-UI components:

```tsx
// App.jsx
import { Config, Puck } from '@measured/puck';
import '@measured/puck/puck.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { config } from 'puck-mui';

// Create a custom MUI theme (optional)
const theme = createTheme({});

// Initial data structure for the editor
const initialData = {};

// Function to handle data save
const save = (data) => {
  console.log("Saved data: ", data);
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Puck config={config as Config} data={initialData} onPublish={save} />
    </ThemeProvider>
  );
}

export default App;
```


## Contributing
Contributions are welcome! If you'd like to contribute new components, features, or bug fixes to puck-mui, feel free to open an issue or submit a pull request.





