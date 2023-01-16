import React, { useEffect, useState } from "react";
import './new-diet-program.css';
import Input from "../../common/input/input.common";
import Select from "../../common/select/select";
import Tabs from "../../common/tabs/tabs.common";
import Button from "./add-button";
import { nanoid } from "nanoid";


const cities = [
    'Jerusalem', 'Bethlehem', 'Beit Jala', 'Beit Sahour', 'Hebron', 'Jericho','Ramallah',
    'Nablus', 'Tulkarem', 'Jenin', ' Gaza'
]

const AddButton = <Button/>
const NewDietProgram = () =>{

  const [patientList, setPatientList] = useState([]);
  const [addFormlist, setAddFormlist] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('patient')|| '[]') ;
    setPatientList(items)
  }, []);

const handleAddPatientSubmit = (event) => {
   
    event.preventDefault();

    const patients = {
      id: nanoid(),
      name: addFormlist.name,
      Phone: addFormlist.Phone,
      email: addFormlist.email,
      city: addFormlist.city,
      birthDate: addFormlist.birthDate
    };

    const patientItems = [...patientList, patients];
    setPatientList(patientItems);
     
    localStorage.setItem("patient", JSON.stringify(patientItems));
  };

  const handleAddPatientChange = (event) => {

    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormlist = { ...addFormlist };
    newFormlist[fieldName] = fieldValue;

    setAddFormlist(newFormlist);
  };

 

    return(
        <div  className="container">
           <form onSubmit={handleAddPatientSubmit}>
          <h2>New Diet Program</h2>  
          <div className="patient-information">
            
                <h3>Patient Information</h3>
                <div className="box">
                 
            <Input
                type="text"
                name="name"
                required="required"
                placeholder="Name"
                onChange={handleAddPatientChange}
           
              />
              <Input
                type="number"
                name="Phone"
                required="required"
                placeholder="Phone Number"
                onChange={handleAddPatientChange}
            
              />
              <Input
                type="email"
                name="email"
                required="required"
                placeholder="Email"
                onChange={handleAddPatientChange}
            
              />


<Select name="city" placeholder="city" onChange={handleAddPatientChange} required>
        {cities.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>

              <Input
                type="date"
                name="birthDate"
                required="required"
                placeholder="Date Of Birth"
                onChange={handleAddPatientChange}
            
              />

              
              
     

      

             
             
            </div>
            <button className="save-btn" type="submit">Save</button>
          </div>
          </form>
          <div className="weekly-programme">
          <h3 >Weekly programme</h3>
          
          <Tabs
      tabs={[
        {name:"Saturday", content: AddButton},
        {name:"Sunday", content: AddButton},
        {name:"Monday", content: AddButton},
        {name:"Tuesday", content: AddButton},
        {name:"Wednesday", content: AddButton},
        {name:"Thursday", content: AddButton},
        {name:"Friday", content: AddButton}
      ]}/>
      <div>
        Total Calories (day): 
      </div>
      <div>
        Number Of Meals: 
      </div>
          </div>
        </div>
    );
}

export default NewDietProgram;