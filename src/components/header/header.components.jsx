import React from "react";
import logo from "../../images/logo.jpg";
import './header.css';
import { Link} from 'react-router-dom';



const Header = () =>{
    return(
        <header className="websiteHeader">
        <div className="left">
        <h1>
        <img src={logo} alt="nutrition" />
            Nutritionst Clinic Manager
        </h1>
        </div>
        <div className="right">
        <nav>
          
            
              <Link to="/ManageFoodTable"> Manage Food Table </Link>
              <Link to="/NewDietProgram">New Diet Program</Link>
              <Link to="/ViewExistingPrograms">View Existing Programs</Link>
              <Link to="/Home">Home</Link>
        </nav>
        </div>
        </header>
       
    );
}

export default Header;