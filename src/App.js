import AsideContainer from "./components/AsideContainer";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="App flex flex-col md:flex-row bg-slate-800 h-full min-h-screen">
      <AsideContainer />
      <MainContainer />
    </div>
  );
}

export default App;
