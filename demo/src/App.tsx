import { Config, Puck, Render } from '@measured/puck';
import '@measured/puck/puck.css';
import { config } from 'puck-mui';
import { useEffect, useState } from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

const initialData = {};

const onPublish = (data: any) => {
  localStorage.setItem('dashboard', JSON.stringify(data));
};

function App() {
  const [data, setData] = useState<any>(undefined);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('dashboard');
    if (data) {
      setData(JSON.parse(data));
    } else {
      setData(initialData);
    }
  }, []);
  if (!data) {
    return null;
  }

  if (preview) {
    return (
      <>
        <AppBar sx={{ backgroundColor: 'white' }}>
          <Toolbar>
            <Box flexGrow={1} />
            <Button variant='text' onClick={() => setPreview(false)}>
              Edit
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ mt: '64px' }}>
          <Render config={config as Config} data={{}} />;
        </Box>
      </>
    );
  }

  return (
    <Puck
      config={config as Config}
      data={data}
      onPublish={onPublish}
      overrides={{
        headerActions: (props) => {
          return (
            <>
              <Button onClick={() => setPreview(true)}>Preview</Button>
              {props.children}
            </>
          );
        }
      }}
    />
  );
}

export default App;
