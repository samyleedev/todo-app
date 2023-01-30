import AsideContainer from "./components/AsideContainer";
import MainContainer from "./components/MainContainer";
import Matrix from "./components/Matrix";

function App() {
  return (
    <div className="App flex flex-col md:flex-row bg-slate-800 sm:max-xl:h-screen">
      <AsideContainer />
      <MainContainer />
    </div>
  );
}

export default App;
