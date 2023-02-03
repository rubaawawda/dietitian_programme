import React, { useState, useEffect } from 'react';
//import Button from '../../pages/new-diet-program/add-button';
//import Item from './item';
import Card from '../../pages/new-diet-program/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import MealPopup from '../../pages/new-diet-program/popup';
import userEvent from '@testing-library/user-event';








const Tabs = (props) => {

 const  {patientList,setPatientList} = props;

    const [trigger, setTrigger] = useState(false)

    const [currentTab, setCurrentTab] = useState("");
   
 
   
 


    //const addButton = <Button />;
    //const addItem = <Item />;
    //const R = JSON.parse(localStorage.getItem('currentTab'));
   
  
   
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wedenesday", "Theresday", "Friday"]
    
   // const [patient,setPatient] = useState({...nestedArray})
   //const [dayProgram, setDayProgram]= useState({...nestedArray})
    
  //  setDayProgram(nestedArray.program[index])
    
    
   // console.log(dayProgram.program[index])
  
  
    

    return (
        <div className='container'>
            <div className='tabs'>
                {
                    days.map((tab, i) => {
                        return (

                            <button key={i} disabled={currentTab === `${i}`} onClick={() => { setCurrentTab(i) }}>{tab}</button>


                        )
                    }

                    )}
            </div>
            <div className='content'>
           <div key={Math.random()}>
           <button ><FontAwesomeIcon icon={faAdd} onClick={() => setTrigger(true)}/></button>
           <MealPopup trigger={trigger} setTrigger={setTrigger} patientList={patientList} setPatientList={setPatientList} currentTab={currentTab}
            />
           </div>
           {   
                   
                   /* o.map((tab, idx)=>
                    {
                        <Card key={idx} name={tab.name} image={tab.image} amount={tab.amount} calories={tab.calories} />
                    }
                    )*/
                }




            </div>



        </div>
    );
}

export default Tabs;