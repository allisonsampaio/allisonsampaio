import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './sections/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;