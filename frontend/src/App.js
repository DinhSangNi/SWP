
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Register from './Components/Register';
import LoginForm from '../src/Components/Login'
import HomePage from './Components/Home/HomePage';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={LoginForm} />
          <Route path='/' Component={HomePage} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;