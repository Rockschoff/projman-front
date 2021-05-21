import React from 'react'
import Table from "react-bootstrap/Table"
import TeamMember from "./TeamMember"

export default function TeamTable(props) {
    return (
        <div>
            
            <Table striped bordered hover size="sm">
                <thead>
                    <th>Name</th>
                    <th>email.</th>
                    <th>Role</th>
                    <th>Task</th>
                </thead>
                <tbody>
                    {console.log("here herehehr")}
                    {console.log(props)}
                    {   
                        props.team.map((member , key)=>{

                            return <TeamMember name = {member.name} email = {member.email} role={member.role}/>
                        })
                    }
                    {/* <TeamMember name = "Jayden" email="jayden@gmail.com"></TeamMember>
                    <TeamMember name = "Beth" email="beth@gmail.com"></TeamMember>
                    <TeamMember name = "Jay" email="jay@gmail.com"></TeamMember> */}
                </tbody>
            </Table>
        </div>
    )
}
