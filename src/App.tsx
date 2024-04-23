import Header from "./components/Header";
import Footer from "./components/Footer";
import GameSetup from "./components/GameSetup";
// import Board from "./components/Board";

function App() {
  return (
    <>
      <Header />
      <main>
        <GameSetup />
        {/* <Board /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
