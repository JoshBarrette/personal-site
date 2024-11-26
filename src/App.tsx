import BottomNav from "./components/BottomNav";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

function App() {
  fetch("/api/");

  return (
    <>
      <div>
        <NavBar />
        <Landing />
        <BottomNav />
      </div>
    </>
  );
}

export default App;
