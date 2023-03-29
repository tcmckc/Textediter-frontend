import './App.css';
//import { io } from "socket.io-client";

import Header from './components/Header';
import Editor from './components/Editor';
import Login from './components/Login';
import Comment from './components/Comment';
import { useState } from 'react';


function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <main className="main">
          <Header email={email} setEmail={setEmail} setToken={setToken} />
          {token ?
            <>
              <Editor email={email} token={token}/>
            </>
            :
            <Login setToken={setToken} setEmail={setEmail} />
            // <Comment />
          }
      </main>
    </div>
    
  );
}

export default App;
