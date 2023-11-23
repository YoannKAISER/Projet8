import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Accueil";
import About from "./Components/About";
import Logement from "./Pages/Logements";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;