import React,{ useState } from 'react'
import './App.css'
import ToDoList from './ToDoList';

function App() {
  const [inputList, setInputList] = useState("")
//    current        uodated           initial
const [Items, setItems] = useState([]);

const itemEvent = (event) =>{
  setInputList(event.target.value);
};

const listOfItems = () =>{
  setItems((oldItems) => {
    return [...oldItems, inputList];
  });
  setInputList("");
};
const deleteItems = (id) =>{
  console.log("deleted");
  setItems((oldItems) =>{
    return oldItems.filter((arrElement, index)=>{
      return index !==id;
      
    })
  })
}


  return (
    <>
      <div className="main_div">
        <div className="center_div"><br/>
          <h1>To-Do List</h1>
          <br/>
          <input type="text" placeholder="add tasks" 
           value={inputList}
          onChange={itemEvent}></input>
          <button onClick={listOfItems}><i class="fas fa-plus-square"></i></button>

          <ol>
            {/* <li>{inputList}</li> */}
            {
              Items.map( (itemVal, index) =>{
                return <ToDoList
                  key={index} 
                  id={index} 
                  text={itemVal}
                  onSelect = {deleteItems}
                />

              })
            }

          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
