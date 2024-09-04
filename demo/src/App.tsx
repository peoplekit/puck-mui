import { Puck, Config } from '@measured/puck';
import '@measured/puck/puck.css';
import { config as c } from '../../src';
import { Button } from '@mui/material';
import { useState } from 'react';
import Preview = Puck.Preview;
const config: Config = c;

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = () => {};

function App() {
  const [preview, setPreview] = useState(false);
  return (
    <Puck config={config} data={initialData} onPublish={save} renderHeaderActions={() => <Button onClick={() => setPreview(true)}>Preview</Button>}>
      {preview && <Preview />}
    </Puck>
  );
}

export default App;
