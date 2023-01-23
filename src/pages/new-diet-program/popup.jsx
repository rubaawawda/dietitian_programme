
import './popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Select from "../../common/select/select";
import { useState } from 'react';
import Input from '../../common/input/input.common';
//import Select from reactSelect
//import Select from "react-select";
import { useEffect } from 'react';



const MealPopup = (props) =>{
    const items = JSON.parse(localStorage.getItem('listItem'));
    const [selectList, setSelectList]=useState('')
    const [amountValue, setAmountValue]= useState('');
      const [selected, setSelected] = useState(''); 
      const value = selected && items[selected];

      useEffect(() => {
        const items = JSON.parse(localStorage.getItem('selectItem')|| '[]') ;
        setSelectList(items)
      }, []);

      const handleAddSubmit = (event) => {
        
        event.preventDefault();
    
        const Item = {
          
          name: " Ahmad",
          saturday: [{name:"rice", calories:"99"}],
          saturday: [{name:"bread", calories:"9"}],
        };
        
        const menuItems = [...selectList, Item];
        setSelectList(menuItems);
        localStorage.setItem("selectItem", JSON.stringify(menuItems));
        
        
      };

    return (props.trigger) ? (

        <div className="popup">
          <form className="inner-popup" onSubmit={handleAddSubmit}>
            <FontAwesomeIcon className="close-btn" onClick={() => props.setTrigger(false)} icon={faXmark} />
            {props.children}
            <h3>Add food meal</h3>
            <div className="box">
                
            <Select 
      onChange={(e) => setSelected(e.target.value)}
      value={selected}>
    
      <option>Selecte a Meal...</option>
      {items.map((m, index) => {
        return <option 
          key={m.id}
          value={index}
        >
         {m.name}
        </option>
      })};
    </Select>

    <Input
            type="numper"
            name="name"
            required="required"
            placeholder="Amount"
            onChange={(e)=>{setAmountValue(e.target.value)}}
        
          />
    
    <div >
      <img src={value.image} alt="img"/>
      
      <div>Total calories: {value.calories/value.amount*amountValue}</div>
    </div>
                    
                      
            </div>
            <button className="create-button" type="submit">Create</button>
    
          </form>
        </div>
      ) : " "
}

export default MealPopup