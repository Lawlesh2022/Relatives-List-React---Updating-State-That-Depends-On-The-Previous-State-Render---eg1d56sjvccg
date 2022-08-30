import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            relativeList: ["Sachin", "Yogesh", "Amit", "Anuj", "Pradeep", "Sunil", "Piyush", "Kamal", "Nihar", "Akhilesh"]
        }
    }
    render() {
         const person = this.state.relativeList.map((p)=>
        <li key={"relativeList" + p.toString()}>{p}</li>
    )
        return(
            <div id="main">
               <ol >{person}</ol>
            </div>
        )
    }
}


export default App;
