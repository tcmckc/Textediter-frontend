import './App.css';

import Editor from './components/Editor';


function App() {
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
