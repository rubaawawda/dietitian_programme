import React, { useState} from 'react';
import './tab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import MealPopup from '../../pages/new-diet-program/popup';
import Select from '../select/select';

const Tabs = (props) => {
 const [trigger, setTrigger] = useState(false)
 const [currentTab, setCurrentTab] = useState(0);
 const [numberOfMeals, setNumberOfMeals] = useState(0)
 const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wedenesday", "Theresday", "Friday"]
    

    
    return (
        <div className='TabView'>
            <div className='tabs'>
                {
                    days.map((tab, i) => {
                        return (

                            <button key={i} disabled={currentTab === `${i}`} onClick={() => { setCurrentTab(i) }} className={currentTab===i?'active-tab' :'tab' }>{tab}</button>


                        )
                    }

                    )}
            </div>
            <div className='content'>
           <div key={Math.random()}>
           <button className='add-meal' ><FontAwesomeIcon icon={faAdd} onClick={() => setTrigger(true)}/>Add</button>
           <MealPopup numberOfMeals={numberOfMeals} setNumberOfMeals={setNumberOfMeals} trigger={trigger} setTrigger={setTrigger} patientList={props.patientList} programList={props.programList} setPatientList={props.setPatientList} currentTab={currentTab}
            />
           </div>
           {   
                   
        props.patientList.length&& props.patientList.map(e=>{ 
                    return(
                       e.program[currentTab].map((tab, idx)=>{
                   
                      return (
                        <div className="Card">
                        
                        <img className='' src={tab.image} alt="img" />
                        <div className='Card-container'>
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

                <span>Nunber of Meals: <span>{numberOfMeals}</span></span>
                  
            

            </div>



        </div>
    );
}

export default Tabs;