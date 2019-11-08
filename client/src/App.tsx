import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AppNavBar from './components/AppNavBar';

const App: React.FC = () => {
  return (
    <div className='App'>
        <AppNavBar />
        <h1>Hello</h1>
    </div>
  );
}

export default App;
