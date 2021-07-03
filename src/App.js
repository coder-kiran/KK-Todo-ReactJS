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
      <Container  >
      <header>
        <h1 > My Todo List</h1>
      </header>  
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>  
         
      <Formforinput inputText={inputText} setInputText={setInputText} todoslist={todoslist} setTodoslist={setTodoslist} />
      </Col>
      </Row>

      <Row fluid className="mt-5  ">
        
      <Col xs={12} sm={12} md={12} lg={4} xl={4}>
      <p style={{textAlign:'center'}}><u>Active</u></p>
      <Todosboxes todoslist={todoslist} setTodoslist={setTodoslist} manageChecked={manageChecked} checked={checked} setChecked={setChecked}  setBinHandle={setBinHandle} binhandle={binhandle}/>  
       </Col>
       
      <Col xs={12} sm={12} md={12} lg={4} xl={4} >
      <p style={{textAlign:'center'}}><u>Completed</u></p>
      <Categories  todoslist={todoslist} setTodoslist={setTodoslist} setBinHandle={setBinHandle} binhandle={binhandle} />
      </Col>
      
     
    
      <Col xs={12} sm={12} md={12} lg={4} xl={4}>    
      <p style={{textAlign:'center'}}><u>Dropped</u></p>
      <Removed  binhandle={binhandle} setBinHandle={setBinHandle} />
      </Col>
      </Row>
      </Container>
    </div>
  
      
  );
}

export default App;
