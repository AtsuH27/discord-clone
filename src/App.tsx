import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/chat/Chat';

function App() {
  return (
    <div className="App"> 
    {/*sidebar*/}
    <Sidebar/>
    <Chat/>
    </div>
  );
}

export default App;
