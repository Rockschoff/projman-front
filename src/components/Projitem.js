import React from 'react'


export default function Projitem(props) {
    return (
        <tr>
            <td>{props.Name}</td>
            <td>{props.Org}</td>
            <td style={(props.Status==="Ongoing")?{color : "red"}:{}}>{props.Status}</td>
        </tr>
    )
}
