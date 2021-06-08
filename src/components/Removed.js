import React from 'react'
import './Removed.css'

function Removed({binhandle,setBinHandle}) {
    return (
        <div className="center-todobox3">
            <ul>
              {  binhandle.map((removeditems,key)=>{
                   
                   const todoDelete = () => {                               
                   
                    setBinHandle(
                        binhandle.filter(obj => removeditems.id !== obj.id)
                    )
                   
                }

                   return(
                    <div className="list-bodyr" >
                        <div className="li-divr">
                        <div className="li-div-subr">
                        <li>{removeditems.text}</li>
                        </div>
                        </div>  

                        <div className="li-btnr" >                                                                        
                                        <span class="fas fa-trash" onClick={todoDelete}></span>                                      
                                    </div>                      
                                                                       
                    </div>
                   )

              })

               
              }
               
            </ul>
            
        </div>
    )
}

export default Removed
