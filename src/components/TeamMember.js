import React from 'react'
import Button from "react-bootstrap/Button"
export default function TeamMember(props) {
    // var temp = [
    //     {
    //         name : "Jayden",
    //         email : "jayden@gmail.com",
    //         role : "design",
    //         tasks : ["task1" , "task2" , "task3"]
    //     },
    //     {
    //         name : "Beth",
    //         email : "beth@gmail.com",
    //         role : "design",
    //         tasks : ["task1" , "task2" , "task3"]
    //     },
    //     {
    //         name : "Jay",
    //         email : "jay@gmail.com",
    //         role : "design",
    //         tasks : ["task1" , "task2" , "task3"]
    //     }
    // ];

    // function getDetails(name , email){
    //     var obj = {}
    //     for(var i = 0 ; i<temp.length;i++){
    //         if(temp[i].name === name){
    //             if(temp[i].email === email){
    //                 obj = temp[i];
    //             }
    //         }
    //     }
    //     return (
    //         <>
    //             <td>{obj.name}</td>
    //             <td>{obj.name}</td>
    //             <td>{obj.name}</td>
    //             <td>Veiw Tasks</td>
    //         </>
    //     )
    // } 
    return (
        <tr>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.role}</td>
                <td><Button variant = "primary">Veiw</Button></td>
        </tr>
    )
}
