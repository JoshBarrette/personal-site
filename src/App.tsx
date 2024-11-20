import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

function App() {
  fetch("https://josh.barrette.dev/api");

  return (
    <>
      <div>
        <NavBar />
        <Landing />
      </div>
    </>
  );
}

export default App;
