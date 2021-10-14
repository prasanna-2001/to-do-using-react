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


  return (
    <>
      <div className="main_div">
        <div className="center_div"><br/>
          <h1>todo list</h1>
          <br/>
          <input type="text" placeholder="add tasks" 
           value={inputList}
          onChange={itemEvent}></input>
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {
              Items.map( (itemVal) =>{
                return <ToDoList
                  text={itemVal}
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
