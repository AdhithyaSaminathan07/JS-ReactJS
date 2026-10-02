import { useState } from 'react';
import Shop from './shop';
import { FaTrashRestoreAlt } from "react-icons/fa";

const Content = () => {

  let [items,setItems] = useState([
    {id:1, label:"HTML & CSS", checked:true},
    {id:2, label:"JavaScript", checked:true},
    {id:3, label:"React JS", checked:false},
  ]);

  return (
    <main>
      {/* <Shop /> */}
      <div>
        <input type="text"/>
        <button>Add</button>
      </div>
      <ul>
        {
          items.map((item)=>{
            return(
              <li key = {item.id}  className ="item">
                <input type = "checkbox" checked = {item.checked}/>
                <label>{item.label}</label>
                {/* <button>Delete</button> */}
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
