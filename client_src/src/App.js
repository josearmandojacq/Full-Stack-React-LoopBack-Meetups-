
import React from 'react';
import './App.css';
import Main from '../src/components/Main';
import Navbar from '../src/components/Navbar';

const App = ()=>(
  <div>
    <Navbar/>
    <div className='container'>
    <Main/>
    </div>
  </div>
);

export default App;
