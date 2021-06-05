import React from 'react'
import Projlist from "./Projlist"
import Container from "react-bootstrap/Container"
import Wave from 'react-wavify'


export default function HomePage(props) {

  const [projList , setProjList] = React.useState([])

  // React.useEffect(()=>{

  //   console.log("about to fetch")
  //   fetch('http://localhost:9000/projects')
  //       .then((response) => {
  //           const v = response.json();
  //           console.log(v)
  //           return v;
  //       })
      
    
    
  // }  , [])

  React.useEffect(()=>{
    console.log("before thr fetch statement");
    fetch("http://localhost:9000/projects")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProjList(data);
      
    })
  } , [])


    return (

        <div style={{
          backgroundColor : "#99bbff",
          height : "900px"
        }}>
        <Container>
        {/* <Projlist data = {props.data}></Projlist> */}

        <Projlist data = {projList}></Projlist>
        {console.log(projList)}
      </Container>
      <Wave fill='#6699ff'
        paused={false}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.15,
          points: 6
        }}
      />
      </div>
      
    )
}
