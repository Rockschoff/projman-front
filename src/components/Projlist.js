import React from 'react'
import Table from "react-bootstrap/Table";
import Projitem from "./Projitem"
import data from "../data"

export default function Projlist() {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <th>Name</th>
                    <th>Org.</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {
                      data.map((proj , key)=>{
                          return <Projitem Name = {proj.name} Org={proj.org}  Status = {proj.status}/>
                      })
                    }
                    
                    {/* <Projitem Name = "Story1" Org = "ABC" Status="Ongoing"></Projitem>
                    <Projitem Name = "Story2" Org = "XYZ" Status="Ongoing"></Projitem> */}
                </tbody>
            </Table>
        </div>
    )
}
