
import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
function MakeTableRows(prop) {

    return (
        <tr>
            <td> {prop.name} </td>
            <td> {prop.IDCode} </td>
            <td> {prop.email} </td>
            <td> عضو ساده </td>
            <td>
                <div className="icons">
                    <i className="bi bi-info-square-fill"></i>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash3-fill" onClick={() => prop.delete(prop.code)}></i>
                </div>
            </td>
        </tr>
    )
}

export default MakeTableRows;