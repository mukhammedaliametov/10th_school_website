import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Management from './components/pages/Management'
import Teachers from './components/pages/Teachers'
import Readers from './components/pages/Readers'
import Contact from './components/pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/managements' element={<Management />} />
            <Route path='/teachers' element={<Teachers />} />
            <Route path='/readers' element={<Readers />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;