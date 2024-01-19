import React from 'react';
import './styles/App.css';
import { Burger } from './components/common/Burger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { MenuCafe } from './pages/MenuCafe';
import { MenuPasteleria } from './pages/MenuPasteleria';
import { MenuSandwiches } from './pages/MenuSandwiches';
import { MenuDesayunos } from './pages/MenuDesayunos';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
        <Burger />
          <Routes>
            <Route path="/cafesanmiguel" element={<Home />} />
            <Route path='/cafesanmiguel/menu' element={<Menu />} />
            <Route path='/cafesanmiguel/menu/cafe' element={<MenuCafe />} />
            <Route path='/cafesanmiguel/menu/pasteleria' element={<MenuPasteleria />} />
            <Route path='/cafesanmiguel/menu/sandwiches' element={<MenuSandwiches />} />
            <Route path='/cafesanmiguel/menu/desayunos' element={<MenuDesayunos />} />
            <Route path='/cafesanmiguel/contacto' element={<Contact />} />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;