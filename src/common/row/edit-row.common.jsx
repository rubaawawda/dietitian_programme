import React from "react";

 
  

 
const EditRow = (props) => {
   

    const {editItemValue, setEditItemValue}=props
      
      const handleEditFormChange = (e) => {
        
        e.preDefault();
    
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
    
        const newFormData = { ...editItemValue };
        newFormData[fieldName] = fieldValue;
    
        setEditItemValue(newFormData);
      };

  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Food name"
          name="name"
          value={editItemValue.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Food image source"
          name="image"
          value={editItemValue.image}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Amount"
          name="amount"
          value={editItemValue.amount}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Calories"
          name="calories"
          value={editItemValue.calories}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={props.handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditRow;
