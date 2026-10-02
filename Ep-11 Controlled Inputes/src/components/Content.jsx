import { useState } from 'react';
import Shop from './shop';
import { FaTrashRestoreAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


const Content = () => {

  let [items,setItems] = useState([
    {id:1, label:"HTML & CSS", checked:true},
    {id:2, label:"JavaScript", checked:true},
    {id:3, label:"React JS", checked:false},
  ]);

  let [newItem,setNewItem] = useState("");
  let[isEditing,setIsEditing] = useState(false);

  const handelChecked = (id) => {
    const newListItems = items.map((item) =>{
      return item.id === id ? { ...item, checked: !item.checked } : item
  });

    setItems(newListItems);
  };

  let handelUpdate = (id) => {
    setIsEditing(true);
  }

  
  return (
    <main>
      {/* <Shop /> */}
      <div>
        <input type="text"
         value={newItem}
         placeholder="Add New Item"
         onChange ={(e)=>{setNewItem(e.target.value)}}
         />
        <button>{isEditing ? "Save":"Add"}</button>
      </div>
      <ul>
        {
          items.map((item)=>{
            return(
              <li key = {item.id}  className ="item">
                <input type = "checkbox" checked = {item.checked} onChange={()=> handelChecked(item.id)}/>
                <label>{item.label}</label>
                <FaEdit role="button" tabIndex={0} onClick={handelUpdate}/>
                <FaTrashRestoreAlt role="button" tabIndex={0} />
              </li>
            )

          })
        }
      </ul>
    </main>
  );
};

export default Content;
