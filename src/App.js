import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
       <NavBar/>
       </Router>
      
    </div>
  );
}

export default App;
