import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Zaposleni from './components/Zaposleni';
import RegisterPage from './components/RegisterPage';
import React from "react";
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import NavBar from './components/NavBar';
import { useState } from 'react';


function App() {
  const[token, setToken]= useState();
  function  addToken(token){
    setToken(token);
  }
  return (
    <BrowserRouter className="App">
      <Routes>
      <Route path='/login' element={ <LoginPage addToken={addToken}/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/' element={<NavBar token={token}/>}>
        <Route path="zaposleni" element={<Zaposleni/>}/>
      </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
