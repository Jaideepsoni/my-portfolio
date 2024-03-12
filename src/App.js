import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>

    </>
  );
}

export default App;
