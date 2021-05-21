import React from 'react'
import TeamTable from "./TeamTable"
import CheckPointsList from "./CheckPointsList"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

export default function ProjPage(props) {
    
    return (
        <Container className= "text-center">
            {/* Team table, it will have a name, emailLink , role.
            Clicking on each team will give the notes on that memeber */}
            {/* Then there will be list of task that are going on, people who are working on them 
            and the upcoming deadlines */}
            <Button variant = "dark" href = {props.project.link} >Open SpreadSheet</Button>
            <TeamTable team = {props.project.members}></TeamTable>
            <CheckPointsList checkpoints = {props.project.checkpoints}></CheckPointsList>
            
        </Container>
    )
}
