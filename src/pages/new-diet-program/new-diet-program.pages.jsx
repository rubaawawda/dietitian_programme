import React from "react";
import './new-diet-program.css';
import Input from "../../common/input/input.common";
import Select from "../../common/select/select";
//import Tabs from "../../common/tabs/tabs.common";
//import Button from "./add-button";
//import Tab from "../../common/Tab/tab";
//import { tab } from "@testing-library/user-event/dist/tab";
import Tabs from "../../common/Tab/tab";




const cities = [
    'Jerusalem', 'Bethlehem', 'Beit Jala', 'Beit Sahour', 'Hebron', 'Jericho', 'Ramallah',
    'Nablus', 'Tulkarem', 'Jenin', ' Gaza'
]


const NewDietProgram = () => {
    return (
        <div className="container">
            <h2>New Diet Program</h2>
            <div className="patient-information">

                <h3>Patient Information</h3>
                <div className="box">
                    <Input
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Name"

                    />
                    <Input
                        type="number"
                        name="Phone number"
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
                        name="birthDate"
                        required="required"
                        placeholder="Date Of Birth"

                    />

                </div>
                <button className="save-btn" type="submit">Save</button>
            </div>
            <div className="weekly-programme">
                <h3 >Weekly programme</h3>

           <Tabs/>
           
           
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