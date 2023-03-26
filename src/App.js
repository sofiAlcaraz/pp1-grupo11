import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import SingIn from './Page/SingIn';
import SignUp from './Page/SingUp';

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
        <Route path="/SingIn" element={<SingIn />} />
        <Route path="/SingUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
