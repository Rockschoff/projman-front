import React from 'react'
import {Card , Container} from "react-bootstrap"
import TaskCard from "./TaskCard"

export default function MemberPage(props) {
    return (
        <div>
            <Container>

               
            <Card.Body variant="dark" style={{backgroundColor : "lightGrey"}}>Name : {" " + props.member.name}</Card.Body>
            <Card.Body variant="dark" style={{backgroundColor : "lightGrey"}}>Email : {" " + props.member.email}</Card.Body>
            <Card.Body variant="dark" style={{backgroundColor : "lightGrey"}}>Role : {" " + props.member.role}</Card.Body>
            <Card.Body variant="dark" style={{backgroundColor : "lightPink"}}>Current Tasks</Card.Body>
            <div style={{display : "flex"}}>
            {
                props.member.tasks.map((task , key)=>{
                    return <TaskCard task={task}></TaskCard>
                })
            }
            </div>
            </Container>
        </div>
    )
}
