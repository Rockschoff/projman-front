import React from 'react'
import {Card , Container , Button , DropdownButton , Dropdown} from "react-bootstrap"
import TaskCard from "./TaskCard"
import AddTask from "./AddTask"
import {useLocation} from "react-router-dom"
import Wave from "react-wavify"


export default function MemberPage(props) {

    const [taskList , setTaskList] = React.useState([])
    
    const [permission , setPermission] = React.useState("Editor")

    const location = useLocation();
    const projectId = location.state.project
    const memberId = location.state.member._id
    const member = location.state.member;
    const params = {projectId : projectId , memberId : memberId}

    React.useEffect(()=>{
        fetch("http://localhost:9000/tasks/" + projectId + "/" + memberId)
        .then(res => res.json()).then(data => setTaskList(data));
    } , [])
    
    return (
        <div style={{
            backgroundColor : "#99bbff",
            height : "auto"
          }}>
            <Container>

            
            <DropdownButton id="dropdown-basic-button" title="Change Permissions">
                <Dropdown.Item  onClick={()=>{setPermission("Editor")}}>Editor</Dropdown.Item>
                <Dropdown.Item  onClick={()=>{setPermission("Commentor")}}>Commentor</Dropdown.Item>
                <Dropdown.Item  onClick={()=>{setPermission("Viewer")}}>Viewer</Dropdown.Item>
            </DropdownButton>
            <Card.Body variant="dark" style={{backgroundColor : "lightGrey"}}>Name : {" " + member.name}</Card.Body>
            <Card.Body variant="dark" style={{backgroundColor : "lightGrey"}}>Email : {" " + member.email}</Card.Body>
            <Card.Body variant="dark" style={{backgroundColor : "lightGrey"}}>Role : {" " + member.role}</Card.Body>
            <Card.Body variant="dark" style={{backgroundColor : "lightGrey"}}>Permission : {" " + permission}</Card.Body>
            <Card.Body variant="dark" style={{backgroundColor : "lightPink"}}>Current Tasks</Card.Body>
            <AddTask member= {member} projectId = {projectId}></AddTask>
            <div style={{display : "flex"}}>
            {
                taskList.map((task , key)=>{
                    return <TaskCard task={task} member = {member}></TaskCard>
                })
            }
            </div>
            </Container>
            <Wave fill='#6699ff'
        paused={false}
        options={{
          height: 1,
          amplitude: 20,
          speed: 0.15,
          points: 6
        }}
      />
        </div>
    )
}
