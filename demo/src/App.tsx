import { Config, Puck } from '@measured/puck';
import '@measured/puck/puck.css';
import { config } from '../../src';
import { useEffect, useState } from 'react';

const initialData = {};

const onPublish = (data: any) => {
  localStorage.setItem('dashboard', JSON.stringify(data));
};

function App() {
  const [data, setData] = useState<any>(undefined);
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
  return <Puck config={config as Config} data={data} onPublish={onPublish} />;
}

export default App;
