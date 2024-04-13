
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import User from './components/User/User';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
         <Navbar></Navbar>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route  path = "/users/:userId" element = {<User/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
