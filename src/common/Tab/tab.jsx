import React, { useState, useEffect } from 'react';
import Button from '../../pages/new-diet-program/add-button';
//import Item from './item';
import Card from '../../pages/new-diet-program/card';

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState("");
   // const [mealList, setMealList] = useState([])

  


    //const addButton = <Button />;
    //const addItem = <Item />;
    //const R = JSON.parse(localStorage.getItem('selectedItem'));

  

    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wedenesday", "Theresday", "Friday"]
    const nestedArray = {
        name: "",
        phoneNumber: "",
        email:" ",
        city:"",
        dob:"",
        id: Math.random(),
        program: [[{name:"A", image:"data:", amount:12, calories:30}], [{name:"B", image:"data:", amount:12, calories:30}], [{name:"C", image:"data:", amount:12, calories:30}], [{name:"D", image:"data:", amount:12, calories:30}], [{name:"E", image:"data:", amount:12, calories:30}], [], []],
    }
    
   const [dayProgram, setDayProgram]= useState({...nestedArray})
    const index = Number(currentTab);
  //  setDayProgram(nestedArray.program[index])
    
    const o = nestedArray.program[index]
    console.log(dayProgram.program[index])
    useEffect(()=>{
		setDayProgram({...nestedArray}) }, []);
  
    

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
           <div key={Math.random()}><Button key={index}/></div>
           {   
                    o.map((tab, idx) => {

                     return (
                            <div>
                                <Card key={idx} name={tab.name} image={tab.image} amount={tab.amount} calories={tab.calories} />
                                
                            </div>

                        )
                    })
                }




            </div>



        </div>
    );
}

export default Tabs;