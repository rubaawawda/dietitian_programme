import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd} from '@fortawesome/free-solid-svg-icons';


const Button = () =>{
    return(
        <button><FontAwesomeIcon  icon={faAdd}/></button>
    )
}

export default Button