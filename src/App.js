import React from 'react';
import './App.css';
import fakeUsers from './fakeUsers/fakeUsers';
import User from './components/User/User';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      {fakeUsers.map(u => {
        return <User user={u}></User>
      })}
    </div>
  );
}

export default App;
