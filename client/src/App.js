import "./App.css";

const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const BASE = process.env.REACT_APP_AIRTABLE_BASE;

function App() {
  return (
    <div className="App">
      {KEY} : {BASE}
    </div>
  );
}

export default App;
