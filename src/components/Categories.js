import React from 'react'
import './Categories.css'

function Categories({setChecked,checked}) {
   
 
    return (
       
            <div className="center-todobox2">
              <ul>
                  {
                      checked.map((items,key)=>{
                          console.log('categories item--',items);

                        const todoDelete = () => {
                            console.log('todoDelete of Categories invoked')

                            setChecked(
                                checked.filter(obj => items.id !== obj.id) //RETURN THOSE LISTS WHICH WHERE NOT CLICKED
                          
                            )
                             console.log('categories obj--',checked)
                      
                        }
                          return(
                              <div className="mainbody2" >
                             {items.completed ? <div id={key} onClick={todoDelete}  className="listbody2"> <li> {items.text} </li> </div>: " " }
                            </div>
                          )
                      })
                  }
              </ul>
            </div>        
     
    )
}

export default Categories
