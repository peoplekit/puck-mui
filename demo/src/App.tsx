import { Puck, Config } from "@measured/puck";
import "@measured/puck/puck.css";

const config: Config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text"
        }
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      }
    }
  }
};

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = () => {};

function App() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}

export default App;
