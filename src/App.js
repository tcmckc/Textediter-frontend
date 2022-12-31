import './App.css';
//import { io } from "socket.io-client";

import Editor from './components/Editor';
import Login from './components/Login';
import authModel from './models/auth';
import { useState } from 'react';

//let socket;


function App() {
  const [token, setToken] = useState("");

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
          {token ?
            <>
              <Editor />
            </>
            :
            <Login setToken={setToken}/>
          }
      </main>
    </div>
    
  );
}

export default App;
