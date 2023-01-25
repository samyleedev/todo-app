import TodoContainer from "./components/TodoContainer";
import GraphContainer from "./components/GraphContainer";

function App() {
  return (
    <div className="App flex  bg-slate-800 h-screen">
      <TodoContainer />
      <GraphContainer />
    </div>
  );
}

export default App;
