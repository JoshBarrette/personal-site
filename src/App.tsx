import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

function App() {
  fetch("/api/")
    .then((res) => console.log(res.body))
    .catch((e) => console.log(e));

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
