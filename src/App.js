import { useState } from 'react';
import './App.css';
import Formforinput from './components/Formforinput';
import Todosboxes from './components/Todosboxes';
import Categories from './components/Categories';
import Removed from './components/Removed';

import {Container,Row,Col} from 'react-bootstrap'

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
     
      
      <Container fluid>
        <Row>
          <Col>
      <header>
        <h1 > My Todo List</h1>
      </header>     
      <Formforinput inputText={inputText} setInputText={setInputText} todoslist={todoslist} setTodoslist={setTodoslist} />
      </Col>
      </Row>
      <Row fluid className="mt-5  ">
        <Col  >Completed</Col>
        <Col>Completing</Col>
        <Col>Bin</Col>        
      </Row>
      <Row className="mt-5">
      
      <Col>
      <Categories  todoslist={todoslist} setTodoslist={setTodoslist} setBinHandle={setBinHandle} binhandle={binhandle} />
      </Col>
      
      <Col>
      <Todosboxes todoslist={todoslist} setTodoslist={setTodoslist} manageChecked={manageChecked} checked={checked} setChecked={setChecked}  setBinHandle={setBinHandle} binhandle={binhandle}/>      </Col>
    
      <Col>      
      <Removed  binhandle={binhandle} setBinHandle={setBinHandle} />
      </Col>
      </Row>
      </Container>
    </div>
  
      
  );
}

export default App;
