import React , {useState} from 'react'
import { Form , Button , Container , Modal , Col} from "react-bootstrap"
import DatePicker from "react-date-picker"
import Send from "./Send"

export default function AddProjForm() {

    const [show, setShow] = useState(false);
    const [start , setStart] = useState(new Date());
    const [deadline , setDeadline] = useState(new Date());
    const [name , setName] = useState("");
    const [org , setOrg] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleSubmit(){
        var obj = {
            name  : name,
            org : org,
            link : "",
            start : start.toString(),
            deadline : deadline.toString(),
            members : [],
            checkpoints : [],
            special : [],
            status : "Ongoing"
        }

        sendToBackend(obj);
        handleClose()
    }

    function sendToBackend(obj){
        Send(obj , "project");
        console.log(obj);
        console.log("creating project in the backend");
    }

    
    return (
        <Container>
            <Button onClick={handleShow}>Add Project</Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Form >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"  onChange={(e)=>{setName(e.target.value)}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Organization</Form.Label>
                        <Form.Control type="text" placeholder="Org. name"  onChange={(e)=>{setOrg(e.target.value)}} />
                        </Form.Group>

                    </Form.Row>
                    <Form.Group  controlId="formGridPassword">
                    <Form.Label>Start Date</Form.Label>
                    <DatePicker onChange={setStart} value = {start}/>
                    </Form.Group>
                    <Form.Group  controlId="formGridPassword">
                    <Form.Label>Deadline</Form.Label>
                    <DatePicker onChange={setDeadline} value = {deadline}/>
                    </Form.Group>
                </Form>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
