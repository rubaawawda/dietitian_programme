
import './popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Select from "../../common/select/select";
//import { useState } from 'react';
//import Select from reactSelect
//import Select from "react-select";



const MealPopup = (props) =>{
    const items = JSON.parse(localStorage.getItem('listItem'));
 
  
    return (props.trigger) ? (

        <div className="popup">
          <form className="inner-popup">
            <FontAwesomeIcon className="close-btn" onClick={() => props.setTrigger(false)} icon={faXmark} />
            {props.children}
            <h3>Add food meal</h3>
            <div className="box">
                
            <Select name="city" placeholder="city" >
                        
                       
                            {
                                items.map(item=>{
                                    return (
                                    <option key={item} value={item}>{item.name}</option>
                                    )
                                })
                            }
                        
                            
                     </Select>
                    
                      
            </div>
            <button className="create-button" type="submit">Create</button>
    
          </form>
        </div>
      ) : " "
}

export default MealPopup