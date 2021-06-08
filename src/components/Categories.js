import React from 'react'
import './Categories.css'

function Categories({setChecked,checked,todoslist,setTodoslist,binhandle,setBinHandle}) {
   
 
    return (
       
            <div className="center-todobox2">
              <ul>
                  {
                      todoslist.map((items,key)=>{                         
                        const todoDelete = () => {
                            console.log('todoDelete of Categories invoked')
                            setBinHandle(
                                [ ...binhandle,...todoslist.filter(obj => items.id === obj.id) ] 
                             )
                            setTodoslist(
                                todoslist.filter(obj => items.id !== obj.id) //RETURN THOSE LISTS WHICH WHERE NOT CLICKED
                          
                            )
                      
                      
                        }
                          return(
                              <div className="mainbody2" >
                             {items.completed ? <div id={key} onClick={todoDelete} 
                              className="listbody2">
                                   <li> {items.text} </li> </div>: " " }
                            </div>
                          )
                      })
                  }
              </ul>
            </div>        
     
    )
}

export default Categories
