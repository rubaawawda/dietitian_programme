import React, { useState, Fragment } from "react";
import './view-existing-programs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Input from "../../common/input/input.common";
import jsPDF from 'jspdf'
const ViewExistingPrograms = (props) => {
    const patients = JSON.parse(localStorage.getItem('nested'));
    const [list, setList] = useState([]);
    const [search, setSearch] = React.useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };


    const generatePDF = () => {


        var doc = new jsPDF('p', 'pt');

        doc.text(40, 40, "Name: ")
        doc.text(40, 60, "Emaile: ")
        doc.text(40, 80, "City: ")
        doc.text(40, 100, "Phone Number: ")
        patients.map(e => {
            doc.text(100, 40, e.name)
            doc.text(100, 60, e.email)
            doc.text(80, 80, e.city)
            doc.text(160, 100, String(e.phoneNumber))

        })
        doc.text(40, 150, "weekly programe")
        doc.text(40, 190, "Meal Name: ")
        doc.text(40, 210, "Amount: ")
        doc.text(40, 230, "Calories: ")
        patients.map(e => {
            e.program.map(day => {
                day.map(e => {
                    doc.text(128, 190, e.name)
                    doc.text(105, 210, String(e.amount))
                    doc.text(110, 230, String(e.calories))

                })
            })
        })




        doc.save('demo.pdf')
    }







    const handleDeleteClick = (itemId) => {
        const newitems = [...patients];

        const index = list.findIndex((item) => item.id === itemId);

        newitems.splice(index, 1);

        setList(newitems);

        localStorage.setItem("nested", JSON.stringify(newitems));
    };




    const data =
        patients.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div >
            <h2 >Patients Program Table</h2>
            <div style={{ paddingLeft: 80 }}>
                <Input
                    type="search"
                    label="Search for Patient"
                    onChange={handleSearch}
                    placeholder="Search"
                />
            </div>
            <table className="table">
                <tbody className="table-body">
                    <tr className="table-header">
                        <td className="col">Patient Name</td>
                        <td className="col">TotalCalories</td>
                        <td className="col">Actions</td>
                    </tr>







                    {
                        data.map((e, index) => {
                            let sum = 0;
                            return (
                                <Fragment >{
                                    <tr className="table-row" key={`key+${index}`} id="ruba">
                                        <td className="col">{e.name}</td>
                                        {
                                            e.totalCalories.map(m => { sum += m })
                                        }
                                        <td className="col">{sum}</td>
                                        <td className="col">
                                            <span><FontAwesomeIcon icon={faFilePdf} onClick={generatePDF} /></span>
                                            <span><FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick} /></span>
                                        </td>

                                    </tr>
                                }</Fragment>


                            )
                        })
                    }







                </tbody>
            </table>


        </div>
    );
}

export default ViewExistingPrograms;
