import "./App.css";
import Result from "./Result";
import Summary from "./Summary";
function App() {
  return (
    <div className="card">
      <Result className="result" />
      <Summary className="summary" />
    </div>
  );
}

export default App;
