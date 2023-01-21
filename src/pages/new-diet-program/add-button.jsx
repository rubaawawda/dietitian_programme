import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import MealPopup from "./popup";


/*<button className="add-button" onClick={() => setAddBtn(true)}>Add</button>
      <Popup trigger={addBtn} setTrigger={setAddBtn} list={list} setList={setList} />*/
const Button = () => {
    const [trigger, setTrigger] = useState(false)

    return (
        <div>
        <button ><FontAwesomeIcon icon={faAdd} onClick={() => setTrigger(true)}/></button>
        <MealPopup trigger={trigger} setTrigger={setTrigger}/>
        </div>
    )
}

export default Button