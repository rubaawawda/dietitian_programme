import React, { useState, Fragment } from "react";
import './manage-food-table.css';
import Popup from "../../common/popup/popup.common";
import data from "./data.json"
import EditRow from "../../common/row/edit-row.common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';




const ManageFoodTable = () =>{

  const [list, setList] = useState(data);
  const [addBtn, setAddBtn]= useState(false)
  const [editID, setEdiId] = useState(null);
  const [editItemValue, setEditItemValue] = useState(null);


  const handleEditClick = (e, item) => {
    
    e.preDefault();
    setEdiId(item.id);

    const listItem = {
      name: item.name,
      image: item.image,
      amount: item.amount,
      calories: item.calories,
    };

    setEditItemValue(listItem);
  };
  
  const handleCancelClick = () => {
    setEdiId(null);
  };

  const handleEditFormSubmit = (e) => {
    e.preDefault();

    const editeditem = {
      id: editID,
      name: editItemValue.name,
      image: editItemValue.image,
      amount: editItemValue.amount,
      calories: editItemValue.calories,
    };

    const newitems = [...list];

    const index = list.findIndex((item) => item.id === editID);

    newitems[index] = editeditem;

    setList(newitems);
    setEdiId(null);
  };


  const handleDeleteClick = (itemId) => {
    const newitems = [...list];

    const index = list.findIndex((item) => item.id === itemId);

    newitems.splice(index, 1);

    setList(newitems);
  };
    

    return (
      <div >
        <h2>Manage Food Table</h2>
        <form onSubmit={handleEditFormSubmit}>
          <table className="table">
          <tbody className="table-body">
          <tr className="table-header">
                    <td className="col">Food</td>
                    <td className="col">Image</td>
                    <td className="col">Amount<small>(g/m)</small></td>
                    <td className="col">Calories</td>
                    <td className="col">Actions</td>
                </tr>
            
            
              {list.map((item) => (
                <Fragment>
                  {editID === item.id ? (
                    <EditRow
                      editItemValue={editItemValue}
                      setEditItemValue={setEditItemValue}
                      handleCancelClick={handleCancelClick}
                    />
                    
                  ) : (
                    <tr className="table-row">
            <td className="col">{item.name}</td>
            <td className="col"><img src={item.image} alt="img"/></td>
            <td className="col">{item.amount}</td>
            <td className="col">{item.calories}</td>
            <td className="col">
                <span><FontAwesomeIcon icon={faPencil} onClick={(e) => handleEditClick(e, item)} /></span>
                <span><FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(item.id)}/></span>
            </td>
        </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
  <button className="add-button" onClick={()=>setAddBtn(true)}>Add</button>
        <Popup trigger={addBtn} setTrigger={setAddBtn} list={list} setList={setList}  />
        
      </div>
    );
}

export default ManageFoodTable;