import React from 'react';
import './styles/App.css';
import { Burger } from './components/common/Burger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

function App() {
  return (
    <>
      <div className='app'>
        <Burger />

        <Router>
          <Routes>
            <Route path="/cafesanmiguel" element={<Home />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;