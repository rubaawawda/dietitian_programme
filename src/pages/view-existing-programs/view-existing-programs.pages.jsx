import React, { useState, Fragment } from "react";
import './view-existing-programs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
//import { useEffect } from "react";

const List = [
    { name: "Ruba", calories: "3878" },
    { name: "Batool", calories: "256" },
    { name: "Amal", calories: "356" },
]

const ViewExistingPrograms = () => {
    const patients = JSON.parse(localStorage.getItem('nested'));

    const [list, setList] = useState(List);

    {
        patients.map(e => {
            let sum = 0;
            console.log(e.name)
            {
                e.totalCalories.map(e => {

                    sum += e
                })
                console.log(sum)
            }
        })
    }





    const handleDeleteClick = (itemId) => {
        const newitems = [...patients];

        const index = list.findIndex((item) => item.id === itemId);

        newitems.splice(index, 1);

        setList(newitems);

          localStorage.setItem("nested", JSON.stringify(newitems));
    };


    return (
        <div >
            <h2>Patients Program Table</h2>

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
                            <Fragment>{
                                <tr className="table-row" key={`key+${index}`}>
                                <td className="col">{e.name}</td>
                                {
                                    e.totalCalories.map(e => { sum += e })
                                }
                                <td className="col">{sum}</td>
                                <td className="col">
                                    <span><FontAwesomeIcon icon={faFilePdf} /></span>
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