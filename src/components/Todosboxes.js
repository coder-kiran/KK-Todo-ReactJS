import React from 'react'
import './Todosboxes.css'

function Todosboxes({ todoslist, setTodoslist }) {

    return (
        <div>
            <ul>
                {
                    todoslist.map((item) => {
                        // functions
                        const todoDone = () => {
                            console.log('item', item); // item {id: 1622226419487, completed: false, text: "home work"}

                            // note that we are globally setting it using setTodolist
                            setTodoslist(
                                todoslist.map((item2) => {
                                    console.log('item2', item2);  // item2 {id: 1622226419487, completed: false, text: "home work"}
                                    if (item2.id === item.id) {
                                        return {
                                            ...item2, completed: !item2.completed

                                        }
                                    }
                                    return item2 // why?                                                            
                                })
                            )
                        }

                        const todoDelete = () =>{

                            setTodoslist(
                                todoslist.filter(obj=> item.id!==obj.id)                               
                              
                            )

                        }


                        return (

                            <div key={item.id} className="list-body">
                                {console.log("item completed status : ", item.completed)}
                                <div className="">
                                    <li className={`${item.completed ? "completed" : ""}`}>{item.text}</li>
                                </div>
                                <button onClick={todoDone}>Done</button>
                                <button onClick={todoDelete}>Delete</button>

                            </div>

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todosboxes
