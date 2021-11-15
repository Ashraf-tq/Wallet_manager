import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import {Login} from './Login'
import {SignUp} from './SignUp'
import {Setup} from './Setup'


function App() {
  return (
    <Router>
      <div className="container">
        
      </div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="SignUp" element={<SignUp />}/>
        <Route path="SetUp" element={<Setup />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
