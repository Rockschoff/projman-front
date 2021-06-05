import React from 'react'
import Table from "react-bootstrap/Table";
import Projitem from "./Projitem"

import AddProjForm from "./AddProjForm"



export default function Projlist(props) {


    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <th>Name</th>
                    <th>Org.</th>
                    <th>Status</th>
                    <th></th>
                </thead>
                <tbody>
                    {console.log(props.data)}
                    {
                      
                      props.data.map((proj , key)=>{
                          return <Projitem Name = {proj.name} Org={proj.org}  Status = {proj.status} _id = {proj._id}  />
                      })
                    }
                    
                    {/* <Projitem Name = "Story1" Org = "ABC" Status="Ongoing"></Projitem>
                    <Projitem Name = "Story2" Org = "XYZ" Status="Ongoing"></Projitem> */}
                </tbody>
            </Table>
            <AddProjForm></AddProjForm>
            
        </div>
    )
}
