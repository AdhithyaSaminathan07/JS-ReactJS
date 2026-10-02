import { useState } from 'react';
import Shop from './shop';
import { FaTrashRestoreAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";



const Content = () => {

  let [items,setItems] = useState([
    {id:1, label:"HTML & CSS", checked:true},
    {id:2, label:"JavaScript", checked:true},
    {id:3, label:"React JS", checked:false},
  ]);

  let [newItem,setNewItem] = useState("");
  let[isEditing,setIsEditing] = useState(false);
  let[currentEleID,setCurrentEleID] = useState(null);

  const handelChecked = (id) => {
    const newListItems = items.map((item) =>{
      return item.id === id ? { ...item, checked: !item.checked } : item
  });

    setItems(newListItems);
  };

  let handelAddOrSaveItem = () => {

    if(isEditing){
      const newListItems = items.map((item) =>{
        return item.id === currentEleID ? { ...item, label: newItem } : item
    })
      setItems(newListItems);
      setCurrentEleID(null);
      setNewItem("");
      setIsEditing(false);

    }
    else{
    setItems([...items,{id: items.length +1 ,label: newItem, checked:false}])
    setNewItem("");
    }
  }

  let handelUpdate = (id) => {
    let listItem = items.find((item) => item.id === id);
    setNewItem(listItem.label);
    setIsEditing(true);
    setCurrentEleID(id);
  }

  let handelDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id).map((item,index)=>{
      return {...item, id: index + 1}
    })
    setItems(newItems);
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
        <button onClick={handelAddOrSaveItem}>{isEditing ? <CiSaveDown2 color="green"/>:<IoIosAddCircle color ="blue"/>}</button>
      </div>
      <ul>
        {
          items.map((item)=>{
            return(
              <li key = {item.id}  className ="item">
                <input type = "checkbox" checked = {item.checked} onChange={()=> handelChecked(item.id)}/>
                <label>{item.label}</label>
                <FaEdit id="edit" role="button" tabIndex={0} onClick={()=> handelUpdate(item.id)}/>
                <FaTrashRestoreAlt id="delete" role="button" tabIndex={0} onClick={()=> handelDelete(item.id)} />
              </li>
            )

          })
        }
      </ul>
    </main>
  );
};

export default Content;
