import './App.css'
import CharacterCounter from './pages/CharacterCounter';
import ButtonCalculation from './pages/ButtonCalculation';
import {Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">CharacterCounter</Link>
        <Link to="/button">ButtonCalculation</Link>
      </nav>
    
      <Routes>
        <Route path="/" element={<CharacterCounter/>} />
        <Route path="/button" element={<ButtonCalculation/>} />
      </Routes>
    </div>
  );
}

export default App
