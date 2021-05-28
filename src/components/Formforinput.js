import React from 'react'

function Formforinput({setInputText,inputText,setTodoslist,todoslist}) {

    // functions
    const inputHandler = (event) =>{
        console.log("value typed in input textbox",event.target.value)
        setInputText(event.target.value)
        
    }
    
    const submitTodoHandler = (event) =>{
        event.preventDefault();
        setTodoslist([...todoslist,{id:Date.now(),completed:false,text:inputText}])
        console.log("value inserted to the todos list as array")     
}

    return (
        <form>
           <input onChange={inputHandler} type="text" value={inputText}  /> 
           {console.log("value of state named inputText: ",inputText)}

           <button onClick={submitTodoHandler}>Add</button>
          
        </form>
    )
}

export default Formforinput
