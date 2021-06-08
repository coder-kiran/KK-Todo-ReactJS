import { useState } from 'react';
import './App.css';
import Formforinput from './components/Formforinput';
import Todosboxes from './components/Todosboxes';


function App() {
  // declaring states
  const [inputText, setInputText] = useState('')
  const [todoslist, setTodoslist] = useState([])
  const [checked, setChecked] = useState([])
  const [binhandle,setBinHandle] = useState([])

  function manageChecked(argu){
    console.log('--Managing the checked--')    
    setChecked(argu) 
    console.log(argu)

  }
    
return (
    <div className="App">
      <header>
        <h1 > KK's todo list</h1>
      </header>

      <Formforinput inputText={inputText} setInputText={setInputText} todoslist={todoslist} setTodoslist={setTodoslist} />
      <Todosboxes todoslist={todoslist} setTodoslist={setTodoslist} manageChecked={manageChecked} checked={checked} setChecked={setChecked}  setBinHandle={setBinHandle} binhandle={binhandle}/>
      {console.log('app.js is this todoslist',todoslist)}
      {console.log('checked',checked)} 
    </div>
  );
}

export default App;
