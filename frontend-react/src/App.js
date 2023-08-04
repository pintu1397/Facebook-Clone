import React from 'react';
import './App.css';
import LoginPage from './Component/LoginPage/LoginPage';
import Layout from './Component/MainPage/Layout';
import NavBar from './Component/NavBar/NavBar';

function App() {
  const user = localStorage.getItem('user');

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar />
          <Layout />
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
