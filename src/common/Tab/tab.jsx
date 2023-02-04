import React, { useState,useEffect} from 'react';
//import Button from '../../pages/new-diet-program/add-button';
//import Item from './item';
//import Card from '../../pages/new-diet-program/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import MealPopup from '../../pages/new-diet-program/popup';
//import { tab } from '@testing-library/user-event/dist/tab';
// import userEvent from '@testing-library/user-event';








const Tabs = (props) => {

    // {patientList,setPatientList}
//  const  {patientList,setPatientList} = props;

    const [trigger, setTrigger] = useState(false)

    const [currentTab, setCurrentTab] = useState(0);
  



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
           <button ><FontAwesomeIcon icon={faAdd} onClick={() => setTrigger(true)}/>Add</button>
           <MealPopup trigger={trigger} setTrigger={setTrigger} patientList={props.patientList} programList={props.programList} setPatientList={props.setPatientList} currentTab={currentTab}
            />
           </div>
           {   
                   
        props.patientList.length&& props.patientList.map(e=>{ 
                    return(
                       e.program[currentTab].map((tab, idx)=>{
                      // <Card key={idx} name={tab.name} image={tab.image} amount={tab.amount} calories={tab.calories}  />
                      // props.patientList.length?    console.log("true"):console.log("false")
                      return (
                        <div className="card">
                        <img src={tab.image} alt="img"/>
                        <div className='container'>
                          <h4>{tab.name}</h4>
                          <p>Amount: {tab.amount}</p>
                          <p>Calories: {tab.calories}</p>
                      </div>
                      
                      
                      </div>
                      )
                        })
                      )
                     
                   })
                }
                  
            

            </div>



        </div>
    );
}

export default Tabs;