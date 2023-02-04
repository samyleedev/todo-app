import AsideContainer from "./components/AsideContainer";
import MainContainer from "./components/MainContainer";
import Matrix from "./components/Matrix";

function App() {
  return (
    <div className="App flex flex-col md:flex-row bg-slate-800 h-screen min-h-full">
      <AsideContainer />
      <MainContainer />
    </div>
  );
}

export default App;
