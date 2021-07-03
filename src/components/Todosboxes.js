import React, {  useState } from 'react'

import './Todosboxes.css'

function Todosboxes({ todoslist, setTodoslist, manageChecked, checked, setChecked ,binhandle,setBinHandle}) {

    const [num, setNum] = useState([])
  

    return (     // This was the main return statement
     

            <div className="centerTodobox  ">
                
                <ul >
                    
                    {
                        
                        todoslist.map((item) => {

                            const todoDone = () => {
                                console.log('******item inside todoDone*****', item);
                                setTodoslist(
                                    todoslist.map((item2) => { //it will loop
                                        console.log('******item2 inside todoDone*****', item2);
                                        if (item2.id === item.id) {
                                            console.log('******MATCHED*****');
                                            return {
                                                ...item2, completed: !item2.completed  // return like this if condition is true


                                            }   //if true return the values to each slot of array 
                                        }
                                        return item2 // why?   //  else return like this and  value will be enter into argument(item2) of anonymous function above this line.Processed item2 is returned 
                                    })
                                )

                                setNum(
                                    todoslist.map((itemitem) => {

                                        if (itemitem.id === item.id) {
                                            return {
                                                ...itemitem, completed: !itemitem.completed
                                            }

                                        }
                                        return itemitem

                                    })
                                )

                            }


                            // const todoDelete = () => {
                            //  setTodoslist(
                            //    todoslist.filter(obj => item.id !== obj.id) 
                            // )}
                            
                            const todoDelete = () => {
                                
                                setBinHandle(
                                    [ ...binhandle,...todoslist.filter(obj => item.id === obj.id) ] 
                                 )                               
                               
                                setTodoslist(
                                    todoslist.filter(obj => item.id !== obj.id)
                                )
                               
                            }




                            return (
                                <div key={item.id}  className={`${!item.completed? "listBody " : "list-body-none" }`}
                                    date={item.d.toDateString()}
                                    time={item.d.toLocaleTimeString('en-US')}>

                                                                  
                              
                                    
                                        <div className="liDiv"><li className={`${item.completed ? "completed" : ""}`}>{item.text}</li>
                                        </div>
                                   

                                    <div className="liBtn" >
                                        <span onClick={todoDone} className="fas fa-check check"></span>                                       
                                        {manageChecked(num)}                                      
                                        <span onClick={todoDelete} class="fas fa-trash"></span>                                      
                                    </div>
                                    {/* <span >{item.d.toString().split(' ').slice(0, 5).join(' ')}</span> */}
                                </div>
                               
                            )

                })
                    }
                </ul>
            </div>

        
           
       

    )

}

export default Todosboxes



