import { useState } from 'react';
import './App.css';
import Formforinput from './components/Formforinput';


function App() {
  // declaring states
  const [inputText, setInputText] = useState('')
  const [todoslist, setTodoslist] = useState([])

  return (
    <div className="App">
      <header>
        <h1> KK's todo list</h1>
      </header>

      <Formforinput inputText={inputText} setInputText={setInputText} todoslist={todoslist} setTodoslist={setTodoslist} />
    </div>
  );
}

export default App;
