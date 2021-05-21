import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

export default function CheckPointsList(props) {
    function addCheckPoint(){
        console.log("We will now add the checkpoint");
    }
    return (
        <div>
            <Container>
            <Card>
            <ListGroup variant="flush">
            <ListGroup.Item variant = "dark">Project Checkpoints</ListGroup.Item>
            <ListGroup.Item variant="primary" onClick={addCheckPoint}>Add CheckPoint</ListGroup.Item>
                {
                    props.checkpoints.map((point , key)=>{
                        return <ListGroup.Item>{point}</ListGroup.Item>

                    })
                }
                {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            </ListGroup>
            </Card>
            </Container>
        </div>
    )
}
