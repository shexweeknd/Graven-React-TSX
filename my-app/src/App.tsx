import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Contacts } from './screens/Contacts';
import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className='container mt-10'>
      <header className='flex justify-between items-center mb-5'>
        <img className="w-10" src="images/logo.png" alt="logo" />
        <nav className='flex justify-between'>
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? "bold": "normal"})} to="/"> Acceuil </NavLink> <br />
          <NavLink className="mr-3" style={({isActive}) => ({fontWeight: isActive ? "bold": "normal"})} to="/ressources"> Ressources </NavLink> <br />
          <NavLink className="mr-3" style={({isActive}) => ({fontWeight: isActive ? "bold": "normal"})} to="/contacts"> Contacts </NavLink> <br />
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
