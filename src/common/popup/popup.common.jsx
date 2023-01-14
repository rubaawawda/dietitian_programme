import React from "react";
import './popup.css'
import Input from "../input/input.common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
//import { faPlus} from '@fortawesome/free-solid-svg-icons';
//import { useState } from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
const Popup = (props) =>{
  //  const [name, setName] = useState('Rice');
  const [addFormlist, setAddFormlist] = useState(null);

  const handleAddFormSubmit = (event) => {
    const {list, setList} = props
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormlist.name,
      image: addFormlist.image,
      amount: addFormlist.amount,
      calories: addFormlist.calories,
    };

    const newContacts = [...list, newContact];
    setList(newContacts);
  };

  const handleAddFormChange = (event) => {
   
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
  
    const newFormlist = { ...addFormlist };
    newFormlist[fieldName] = fieldValue;

    setAddFormlist(newFormlist);
  };


      
    
    return(props.trigger)?(

        <div className="popup">
            <form className="inner-popup" onSubmit={handleAddFormSubmit}>
            <FontAwesomeIcon className="close-btn" onClick={()=>props.setTrigger(false)} icon={faXmark}/>
                {props.children}
                <h3>Add food meal</h3>
                <div className="box">
                <Input
                 type="text"
                 name="name"
                 required="required"
                 placeholder="Food name"
                 onChange={handleAddFormChange}
               
              />
             <Input
                type="text"
                name="image"
                required="required"
                placeholder="Food image source"
                onChange={handleAddFormChange}
              />
              <Input
                 type="number"
                 name="amount"
                 required="required"
                 placeholder="Amount"
                 onChange={handleAddFormChange}
               
              />
              <Input
                    type="calories"
                    name="calories"
                    required="required"
                    placeholder="Calories"
                    onChange={handleAddFormChange}
                
              />
             </div>
                <button className="nemo-button" type="submit">Create</button>
                
            </form>
        </div>
    ): " "
}

export default Popup
