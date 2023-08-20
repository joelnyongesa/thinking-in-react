import './App.css';
import FilterableProductTable from './FilterableProductTable';


 /* 
      Thinking in React.
      Step 1. Break the UI into a component hierarchy.
      Step 2. Build a static version in React.
      Step 3. Identify the minimal but complete  reoresentation of the UI state.
      Step 4: Identify where your state should live.
      Step 5: Add inverse data flow.
      */

// Step 1: Break the UI into a component hierarchy.









function App() {
 
  return (
    <div className="App">
      <FilterableProductTable />
    </div>
  );
}

export default App;
