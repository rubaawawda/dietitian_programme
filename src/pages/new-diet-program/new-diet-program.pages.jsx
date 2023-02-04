import React from "react";
import './new-diet-program.css';
import Input from "../../common/input/input.common";
import Select from "../../common/select/select";
//import Tabs from "../../common/tabs/tabs.common";
//import Button from "./add-button";
//import Tab from "../../common/Tab/tab";
//import { tab } from "@testing-library/user-event/dist/tab";
import Tabs from "../../common/Tab/tab";
import { useState, useEffect } from "react";




const cities = [
    'Jerusalem', 'Bethlehem', 'Beit Jala', 'Beit Sahour', 'Hebron', 'Jericho', 'Ramallah',
    'Nablus', 'Tulkarem', 'Jenin', ' Gaza'
]
/*const nestedArray = {
    name: "",
    phoneNumber: "",
    email: " ",
    city: "",
    dob: "",
    id: Math.random(),
    program: [[{ name: "one", image: "data:", amount: 12, calories: 30 }], [{ name: "two", image: "data:", amount: 12, calories: 30 }], [{ name: "c", image: "data:", amount: 12, calories: 30 }], [{ name: "B", image: "data:", amount: 12, calories: 30 }], [], [], []],
    // totalCalories: [0,0,0,0,0,0,0]
}*/


/* const addFoodToDay = (food, dayId) =>{
   const newPrograme = [...user.program];
     newPrograme[dayId] = [...newPrograme[dayId], food.id]  
     const newTotal = [...user.totalCalories];
     newTotal[dayId]+=food.amount*food.calories;
     setUser({
         ...user,
         program: newPrograme,
         totalCalories: newTotal
     })
 }*/

//console.log(R);

const NewDietProgram = () => {
    const [patientList, setPatientList] = useState([]);
    

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('nested') || '[]');
        setPatientList(items)
    }, []);
    
   
    
  


    // const [addFormlist, setAddFormlist] = useState(null);


    const handleSaveSubmit = (event) => {

        event.preventDefault();

        const Patient = {

            name: event.target.name.value,
            phoneNumber: event.target.phoneNumber.value,
            email: event.target.email.value,
            city: event.target.city.value,
            dob: event.target.dob.value,
            program: [[],[],[],[],[],[],[]],
            totalCalories: [0,0,0,0,0,0,0]
            // program:  [[{name:"A", image:"data:", amount:12, calories:30}], [{name:"B", image:"data:", amount:12, calories:30}], [{name:"C", image:"data:", amount:12, calories:30}], [{name:"D", image:"data:", amount:12, calories:30}], [{name:"E", image:"data:", amount:12, calories:30}], [], []],
            // totalCalories: [0,0,0,0,0,0,0]

        };
       const newPatientList = [...patientList, Patient];
       setPatientList(newPatientList);
        localStorage.setItem("nested", JSON.stringify(newPatientList));
    };

    // const handleSaveChange = (event) => {
    //     event.preventDefault();
    //     const fieldName = event.target.getAttribute("name");
    //     const fieldValue = event.target.value;
    //     const newFormlist = { ...addFormlist };
    //     newFormlist[fieldName] = fieldValue;
    //     setAddFormlist(newFormlist);
    //     console.log('Form list : ', newFormlist);
    // };


    return (
        <div className="container">
            <h2>New Diet Program</h2>
            <div className="patient-information">

                <h3>Patient Information</h3>
                <form onSubmit={handleSaveSubmit}>
                    <div className="box">
                        <Input
                            type="text"
                            name="name"
                            required="required"
                            placeholder="Name"

                        />
                        <Input
                            type="number"
                            name="phoneNumber"
                            required="required"
                            placeholder="Phone Number"
                        />
                        <Input
                            type="email"
                            name="email"
                            required="required"
                            placeholder="Email"
                        />


                        <Select name="city" placeholder="city" required>
                            {cities.map(item => {
                                return <option key={item} value={item}>{item}</option>;
                            })}
                        </Select>

                        <Input
                            type="date"
                            name="dob"
                            required="required"
                            placeholder="Date Of Birth"

                        />

                    </div>
                    <button className="save-btn" type="submit">Save</button>
                </form>
            </div>
            <div className="weekly-programme">
                <h3 >Weekly programme</h3>

                <Tabs patientList={patientList} setPatientList={setPatientList} />


                <div>
                    Total Calories (day):
                </div>
                <div>
                    Number Of Meals:
                </div>
            </div>
            <button >Submit</button>
        </div>
    );
}

export default NewDietProgram;