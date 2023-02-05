import React, { useState, Fragment } from "react";
import './view-existing-programs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
//import { useEffect } from "react";
import { jsPDF } from "jspdf";
import Input from "../../common/input/input.common";

const initialItems = [];

const ViewExistingPrograms = () => {
    const patients = JSON.parse(localStorage.getItem('nested'));
    const [list, setList] = useState([]);
    const [menuItems, setMenuItems] = useState(initialItems);
    const [searchTerms, setSearchTerms] = useState('');
  

    


const generatePDF = () => {

    const report = new jsPDF('portrait','pt','a4','false');
    report.html(document.querySelector('#ruba')).then(() => {
        report.save('report.pdf');
    })
   

}
//<div id="report">hgjgugu</div>

    const handleDeleteClick = (itemId) => {
        const newitems = [...patients];

        const index = list.findIndex((item) => item.id === itemId);

        newitems.splice(index, 1);

        setList(newitems);

          localStorage.setItem("nested", JSON.stringify(newitems));
    };

    const filteredItems = menuItems.filter(item => {
        /**
         * Check if search terms are somewhere inside given string.
         * @param {string} str 
         */
        const doesItMatch = str => str.toLowerCase().includes(searchTerms.toLowerCase().trim());
    
        const match = (
          doesItMatch(item.name) 
        );
    
        return match;
      });
    


    return (
        <div >
            <h2 >Patients Program Table</h2>
 
            <Input
        type="search"
        value={searchTerms}
        onChange={e => setSearchTerms(e.target.value)}
        placeholder="Search"
      />
{
      filteredItems .map((item, index) => {
        
                            let sum = 0;
                            return(
                            <Fragment >{
                                <tr className="table-row" key={`key+${index}`} id="ruba">
                                <td className="col">{item.name}</td>
                                {
                                    item.totalCalories.map(item => { sum += item })
                                }
                                <td className="col">{sum}</td>
                                <td className="col">
                                    <span><FontAwesomeIcon icon={faFilePdf} onClick={generatePDF}/></span>
                                    <span><FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(item.id)} /></span>
                                </td>

                            </tr>
                            }</Fragment>
                           

                         ) })
      

}
            <table className="table">
                <tbody className="table-body">
                    <tr className="table-header">
                        <td className="col">Patient Name</td>
                        <td className="col">TotalCalories</td>
                        <td className="col">Actions</td>
                    </tr>


                    

                      


                    {
                        patients.map((e, index) => {
                            let sum = 0;
                            return(
                            <Fragment >{
                                <tr className="table-row" key={`key+${index}`} id="ruba">
                                <td className="col">{e.name}</td>
                                {
                                    e.totalCalories.map(e => { sum += e })
                                }
                                <td className="col">{sum}</td>
                                <td className="col">
                                    <span><FontAwesomeIcon icon={faFilePdf} onClick={generatePDF}/></span>
                                    <span><FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(e.id)} /></span>
                                </td>

                            </tr>
                            }</Fragment>
                           

                         ) })
                    }







                </tbody>
            </table>



        </div>
    );
}

export default ViewExistingPrograms;