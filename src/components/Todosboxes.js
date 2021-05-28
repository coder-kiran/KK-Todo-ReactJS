import React from 'react'

function Todosboxes({ todoslist, setTodoslist }) {
    return (
        <div>
            <ul>
                {
                    todoslist.map((item) => {
                        return (
                            <li>{item.text}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todosboxes
