
import './popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Select from "../../common/select/select";
import { useState } from 'react';
import Input from '../../common/input/input.common';


const MealPopup = (props) => {
  const {patientList,setPatientList, currentTab} = props
  const items = JSON.parse(localStorage.getItem('listItem'));
  const [amountValue, setAmountValue] = useState('');
  const [selected, setSelected] = useState('');
  const value = selected && items[selected];
  const [programList, setProgramList] = useState([...patientList]);
  const [totalCaloriesList, setTotalCaloriesList] = useState([...patientList]);

  


  const handleCreateSubmit = (event) => {
    event.preventDefault();
    const Item = {
        name: items[selected || 0].name,
        image: items[selected || 0].image,
        amount: amountValue,
        calories: parseFloat(items[selected || 0].calories) / parseFloat(items[selected || 0].amount) * parseFloat(amountValue)
    };
    const currentProgramList = [...programList];
    const currentCaloriesList = [...totalCaloriesList];
   
  
   currentProgramList[patientList.length -1 || 0].program[currentTab] = [...currentProgramList[patientList.length -1 || 0].program[currentTab], Item]
   currentCaloriesList[patientList.length -1 || 0].totalCalories[currentTab]+= Item.calories
 
   
   

    setProgramList(currentProgramList);
    setTotalCaloriesList(currentCaloriesList)
    setPatientList(currentCaloriesList);
    setPatientList(currentProgramList);
  
    localStorage.setItem("nested", JSON.stringify(programList));
 
  };
  
  return (props.trigger) ? (

    <div className="popup">
    
        <FontAwesomeIcon className="close-btn" onClick={() => props.setTrigger(false)} icon={faXmark} />
        {props.children}
        <h3>Add food meal</h3>
        <form onSubmit={handleCreateSubmit }>
        <div className="box">

          <Select name='selected-food' onChange={(e) => setSelected(e.target.value)} value={selected}>
            {
              items?.map((e, index) => {
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
        
        <button className="create-button" type="submit" >Create</button>

        </form>
    </div>
  ) : " "
}

export default MealPopup