import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
function App() {
  return (
    <div className="App">
      {/*<NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          
          <Route path="/inscripcion" element={<Inscripcion />} />
      
          <Route path="/centros" element={<Centros />} />

          <Route path="/mapa" element={<Mapa />} />

          <Route path="/resultados" element={<Resultados />} />

        </Routes>*/}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
