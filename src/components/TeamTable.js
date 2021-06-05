import React from 'react'
import Table from "react-bootstrap/Table"
import TeamMember from "./TeamMember"

import AddMember from "./AddMember"


export default function TeamTable(props) {
    

    return (
        <div>
            
            <Table striped bordered hover size="sm" style={{margin : "20px auto 20px auto"}}>
                <thead>
                    <th>Name</th>
                    <th>email.</th>
                    <th>Role</th>
                    <th>Task</th>
                </thead>
                <tbody>
                    {/* {console.log("here herehehr")}
                    {console.log(props)} */}
                    {   
                        props.members.map((member , key)=>{

                            return <TeamMember name = {member.name} email = {member.email} role={member.role} _id = {member._id}/>
                        })
                    }
                    {/* <TeamMember name = "Jayden" email="jayden@gmail.com"></TeamMember>
                    <TeamMember name = "Beth" email="beth@gmail.com"></TeamMember>
                    <TeamMember name = "Jay" email="jay@gmail.com"></TeamMember> */}
                </tbody>
            </Table>
            <AddMember project = {props.projectId}/>
            
        </div>
    )
}
