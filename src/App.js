import React from "react"
import Navigation from "./components/Navigation"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import Projlist from "./components/Projlist"
import ProjPage from "./components/ProjPage"
import data from "./data.js"
import MemberPage from "./components/MemberPage.js"

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      {/* When we click on the add project
      1. it will show a prompt to fill the name of the project and startDate
      2. it will call the python file, the python file will make a cocpy of the template
        , will rename it and give the link of the new project 
      3. Now we will taken to the project page, where we can start adding members and giving them editing rights
      */}
      <Container>
        <Projlist></Projlist>
      </Container>
      <ProjPage project={data[0]}></ProjPage>
      <MemberPage member = {data[0].members[0]}></MemberPage>

    </div>
  );
}

export default App;

// the json of each project will have.
// name
//Org.
// unique_id
//Google Sheet Link
// Start date
// status : Ongoing , Paused , Finished
// List of member Objects* 
// List of checkPosts
//List Special Notes

//each member object will have 
//Name
//Email
//Role
//TaskObject

//Each Task Object will have 
//Task NAme
//Task Description
//Assigned Date
//Deadline