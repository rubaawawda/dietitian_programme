import React from "react";
import "./edit-row.css";

 
  

 
const EditRow = (props) => {
   

    const {editItemValue, setEditItemValue}=props
      
      const handleEditChange = (e) => {
        
       // e.preDefault();
    
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
    
        const newFormData = { ...editItemValue };
        newFormData[fieldName] = fieldValue;
    
        setEditItemValue(newFormData);
      };

  return (
    <tr key={`key+${props.index}`}>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Food name"
          name="name"
          value={editItemValue.name}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Food image source"
          name="image"
          value={editItemValue.image}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Amount"
          name="amount"
          value={editItemValue.amount}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Calories"
          name="calories"
          value={editItemValue.calories}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <button type="submit" className="save">Save</button>
        <button type="button" className="cancle" onClick={props.handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditRow;
