import React from "react";
import './new-diet-program.css';
import Input from "../../common/input/input.common";
import Select from "../../common/select/select";
import Tabs from "../../common/Tab/tab";
import { useState, useEffect } from "react";




const cities = [
    'Jerusalem', 'Bethlehem', 'Beit Jala', 'Beit Sahour', 'Hebron', 'Jericho', 'Ramallah',
    'Nablus', 'Tulkarem', 'Jenin', ' Gaza'
]

const NewDietProgram = () => {
    const [patientList, setPatientList] = useState([]);
    

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('nested') || '[]');
        setPatientList(items)
    }, []);
    
   
    const handleSaveSubmit = (event) => {

        event.preventDefault();

        const Patient = {

            name: event.target.name.value,
            phoneNumber: event.target.phoneNumber.value,
            email: event.target.email.value,
            city: event.target.city.value,
            dob: event.target.dob.value,
            id: Math.random(),
            program: [[],[],[],[],[],[],[]],
            totalCalories: [0,0,0,0,0,0,0]
            

        };
       const newPatientList = [...patientList, Patient];
       setPatientList(newPatientList);
        localStorage.setItem("nested", JSON.stringify(newPatientList));
    };


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


            </div>
         
        </div>
    );
}

export default NewDietProgram;