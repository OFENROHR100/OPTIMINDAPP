import './App.css';
import Home from './apps/Home';
import Team from './apps/Team';
import Partner from './apps/Partner';
import Aufnahme from  './apps/Aufnahme';
import Kontakt from './apps/Kontakt';
import {Route, Routes} from "react-router-dom"
import React, { useLayoutEffect, useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/team' element={<Team />} />
      <Route path='/partner' element={<Partner/>} />
      <Route path='/aufnahme' element={<Aufnahme />} />
      <Route path='/kontakt' element={<Kontakt />} />
    </Routes>
  );
}

export default App;
