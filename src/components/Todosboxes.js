import React,{useState} from 'react'
import Categories from './Categories';
import Removed from './Removed';
import './Todosboxes.css'

function Todosboxes({ todoslist, setTodoslist ,manageChecked,checked,setChecked}) {

    const [num, setNum] = useState([])

    return (     // This was the main return statement
        <div className="carrier-sub">

            <div className="center-todobox">
                <ul>
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
todoslist.map((itemitem)=>{
                                       
if(itemitem.id===item.id){
return{
     ...itemitem,completed: !itemitem.completed
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
    console.log('hi')
    // setNum(todoslist)
    setTodoslist(
           todoslist.filter(obj => item.id !== obj.id) 
        )

}


                         

                            return (

                            
                                <div key={item.id} className="list-body"
                                    date={item.d.toDateString()}
                                    time={item.d.toLocaleTimeString('en-US')}
                                    
                                >
                                        {console.log('VALUES')}
                                      {console.log("*1****Todolist state updated by todoDone function:******-",todoslist)}  
                                      {console.log('************************num****************',num)}
                                    <div className="li-div" onClick={todoDelete}>
                                        <div className="li-div-sub">
                                            <li className={`${item.completed ? "completed" : ""}`}>{item.text}</li>

                                        </div>
                                      
                                    </div>
                                   
                                    <div className="li-btn" >

                                        <span onClick={todoDone} className="fas fa-check check"></span>
                                        {console.log("*****           2           ******-",todoslist)}
                                        {manageChecked(num)}
                                        {console.log(item.d.toString())}
                                        {/* <span onClick={todoDelete} class="fas fa-trash"></span> */}
                                                                           
                                       
                                        {console.log('VALUE OF NUM:-', num)}

                                    </div>




                                    {/* <span >{item.d.toString().split(' ').slice(0, 5).join(' ')}</span> */}

                                </div>




                            )
                        })
                    }
                </ul>
            </div>

            <Categories  checked={checked} setChecked={setChecked}  />
            <Removed />
        </div>

    )
}

export default Todosboxes
                                        


