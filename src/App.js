import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import BlogHome from './BlogHome';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path='/' element={<BlogHome/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/login/imgui' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
   </>
  );
}

export default App;
