//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Componants/Home";
import User from "./Componants/User"
import Users from "./Componants/Users"
//import LineChart from "./Componants/LineChart"
import d3test from "./Componants/d3test"


import Chart from './ResponsiveBar.js';




function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/user" element={<User/>} />
    <Route path="/users" element={<Users/>} />
    <Route path="/d3test" element={<d3test/>} />
    
  </Routes>
    
    
    
    </>
  );
}

export default App;
