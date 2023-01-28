
import './popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Select from "../../common/select/select";
import { useState } from 'react';
import Input from '../../common/input/input.common';
//import Select from reactSelect
//import Select from "react-select";
import { useEffect } from 'react';
//import Card from './card';



const MealPopup = (props) => {
  const items = JSON.parse(localStorage.getItem('listItem'));
  const [selectedList, setSelectedList] = useState([])
  const [amountValue, setAmountValue] = useState('');
  const [selected, setSelected] = useState('');
  const value = selected && items[selected];

  useEffect(() => {
    const selectedItems = JSON.parse(localStorage.getItem('selectedItem') || '[]');
    setSelectedList(selectedItems)
  }, []);

  const handleCreateSubmit = (event) => {

    event.preventDefault();

    const Item = {
    
        name: value.name,
        image: value.image,
        amount: amountValue,
        calories: value.calories / value.amount * amountValue

    };

    const updateList = [...selectedList, Item];
    setSelectedList(updateList);
    localStorage.setItem("selectedItem", JSON.stringify(updateList));


  };




  return (props.trigger) ? (

    <div className="popup">
      <form className="inner-popup" onSubmit={handleCreateSubmit}>
        <FontAwesomeIcon className="close-btn" onClick={() => props.setTrigger(false)} icon={faXmark} />
        {props.children}
        <h3>Add food meal</h3>
        <div className="box">

          <Select onChange={(e) => setSelected(e.target.value)} value={selected}>
            {
              items.map((e, index) => {
              return <option key={e.id} value={index} >{e.name}</option>
                })
            };
          </Select>
          <img src={value.image} alt="img"/>
          <Input
            type="numper"
            amount="name"
            required="required"
            placeholder="Amount"
            onChange={(e) => { setAmountValue(e.target.value) }}

          />

        <p>Total Calories: {value.calories / value.amount * amountValue}</p>


        </div>
        <button className="create-button" type="submit">Create</button>

      </form>
    </div>
  ) : " "
}

export default MealPopup