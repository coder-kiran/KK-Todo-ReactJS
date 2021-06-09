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
     
      <div className="container">
      
      <header>
        <h1 > My Todo List</h1>
      </header>
     
      <Formforinput inputText={inputText} setInputText={setInputText} todoslist={todoslist} setTodoslist={setTodoslist} />
      <Todosboxes todoslist={todoslist} setTodoslist={setTodoslist} manageChecked={manageChecked} checked={checked} setChecked={setChecked}  setBinHandle={setBinHandle} binhandle={binhandle}/>
     
    </div>
      </div>
      
  );
}

export default App;
