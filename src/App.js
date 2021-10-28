import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        <Weather city="Hadera" />
      </header>
    </div>
  );
}

export default App;
