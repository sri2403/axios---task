import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React, { useState } from 'react';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import Edit from '../pages/Edit';
import Create from '../pages/Create';
import Users from '../pages/Users';

const App = () => {
  const[id,setId]=useState(0);
  return (
    <BrowserRouter>
    <div>
      <Nav/>
    </div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/users" element={<Users setId={setId}/>}/>
      <Route path='/edit/:id' element={<Edit id={id} />}/>
      <Route path='/create' element={<Create />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;