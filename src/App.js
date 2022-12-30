import './App.css';
//import { io } from "socket.io-client";

import Editor from './components/Editor';
//import { useEffect, useState } from 'react';

//let socket;


function App() {
  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   setSocket(io("http://localhost:8976"));

  //   return () => {
  //     if (socket) {
  //       socket.disconnect();
  //     }
  //   }
  // }, [socket]); 


  // socket.emit('create', docs['_id']);
  // socket.to(data['_id']).emit('doc', data);

  return (
    <div className="App">
      <header className="header">
        <h1>TEXT EDITOR</h1>
      </header>
      <main className="main">
          <>
            <Editor />
          </>
      </main>
    </div>
    
  );
}

export default App;
