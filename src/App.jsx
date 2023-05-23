import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Management from './components/pages/Management'
import Contact from './components/pages/Contact'
import Footer from './components/Footer';
import Teachers from './components/pages/Teachers';
import News from './components/pages/News';

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
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;