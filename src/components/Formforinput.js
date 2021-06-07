import React from 'react'
import './Formforinput.css'


function Formforinput({ setInputText, inputText, setTodoslist, todoslist }) {

    // functions
    const inputHandler = (event) => {

        console.log("value typed in input textbox", event.target.value)
        setInputText(event.target.value)

    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodoslist([...todoslist, { 
            id: Date.now(), completed: false, text: inputText, d:new Date() }])
       
        
        setInputText("")
        console.log("value inserted to the todos list as array")
        console.log(todoslist);
    }

    return (

        <div className="carrier">

            <div className="input-section">

                <div className="input-box">
                    <form onSubmit={submitTodoHandler}>
                    <input onChange={inputHandler} type="text" value={inputText} />                    
                    </form>
                </div>
             
                <div className="input-btn">
                    <span className="fas fa-plus-square" onClick={submitTodoHandler}></span>             
                </div>





            </div>
        </div>




    )
}

export default Formforinput
