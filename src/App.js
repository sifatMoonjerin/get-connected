import React from 'react';
import './App.css';
import fakeUsers from './fakeUsers/fakeUsers';
import List from './components/List/List';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <List users={fakeUsers}></List>
    </div>
  );
}

export default App;
