import { Puck, Config } from "@measured/puck";
import "@measured/puck/puck.css";
import { config as c } from "../../src";
const config: Config = c;

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = () => {};

function App() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}

export default App;
