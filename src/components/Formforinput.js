import React from 'react'

function Formforinput({setInputText,inputText}) {
    const inputHandler = (event) =>{
        console.log("value typed in input textbox",event.target.value)
        setInputText(event.target.value)
        
    }
    return (
        <div>
           <input onChange={inputHandler} type="text" /> 
           {console.log("value of state name inputText: ",inputText)}
        </div>
    )
}

export default Formforinput
