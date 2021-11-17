import React from 'react';
import './style.css';
import Market from './Market';
import logo from './src/logo.png';

export default function App() {
  return (
    <div>
      <Market />
      <img src={logo} alt="logo" />
    </div>
  );
}
