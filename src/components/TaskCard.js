import React from 'react'
import {Card  ,Button, ListGroup} from "react-bootstrap"

export default function TaskCard(props) {
    return (
        <div>
            <Card style={props.task.urgent?{ width: '18rem' , backgroundColor : "lightPink" } : {width : "18rem"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Proj Name</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                </Card.Text>
                <Card.Text>People Working : {" " + props.task.working}</Card.Text>
                <ListGroup>
                    <ListGroup.Item>Extra Note 1 jwejoije ewij  we ijowe oiweo</ListGroup.Item>
                    <ListGroup.Item>Extra Note 1 jwejoije ewij  we ijowe oiweo</ListGroup.Item>
                    <ListGroup.Item>Extra Note 1 jwejoije ewij  we ijowe oiweo</ListGroup.Item>
                </ListGroup>
                <Card.Text><b>Assigned on : {" " + props.task.assigned}</b></Card.Text>
                <Card.Text><b>deadline on : {" " + props.task.deadline}</b></Card.Text>
                <Button size="sm">Edit</Button>
            </Card.Body>
            </Card>
        </div>
    )
}
