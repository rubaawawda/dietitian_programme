import React from "react";
import './popup.css'
import Input from "../input/input.common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
//import { faPlus} from '@fortawesome/free-solid-svg-icons';
//import { useState } from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
const Popup = (props) => {

  const [addFormlist, setAddFormlist] = useState(null);

  const handleAddSubmit = (event) => {
    const { list, setList } = props
    event.preventDefault();

    const Menu = {
      id: nanoid(),
      name: addFormlist.name,
      image: addFormlist.image,
      amount: addFormlist.amount,
      calories: addFormlist.calories,
    };
    
    const menuItems = [...list, Menu];
    setList(menuItems);
    localStorage.setItem("listItem", JSON.stringify(menuItems));
    
    
    
  };

  const handleAddChange = (event) => {

    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormlist = { ...addFormlist };
    newFormlist[fieldName] = fieldValue;

    setAddFormlist(newFormlist);
  };




  return (props.trigger) ? (

    <div className="popup">
      <form className="inner-popup" onSubmit={handleAddSubmit}>
        <FontAwesomeIcon className="close-btn" onClick={() => props.setTrigger(false)} icon={faXmark} />
        {props.children}
        <h3>Add food meal</h3>
        <div className="box">
          <Input
            type="text"
            name="name"
            required="required"
            placeholder="Food name"
            onChange={handleAddChange}

          />
          <Input
            type="text"
            name="image"
            required="required"
            placeholder="Food image source"
            onChange={handleAddChange}
          />
          <Input
            type="number"
            name="amount"
            required="required"
            placeholder="Amount"
            onChange={handleAddChange}

          />
          <Input
            type="calories"
            name="calories"
            required="required"
            placeholder="Calories"
            onChange={handleAddChange}

          />
        </div>
        <button className="create-button" type="submit">Create</button>

      </form>
    </div>
  ) : " "
}

export default Popup
