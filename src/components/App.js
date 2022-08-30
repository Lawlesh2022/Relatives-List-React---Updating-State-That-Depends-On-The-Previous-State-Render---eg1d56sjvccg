import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.relativeList ={
            names: ["Sachin", "Yogesh", "Amit", "Anuj", "Pradeep", "Sunil", "Piyush", "Kamal", "Nihar", "Akhilesh"]
        }
    }
    render() {
         const person = this.relativeList.names.map((p)=>
        <li key={p.toString()}>{p}</li>
    )
        return(
            <div id="main">
               <ol >{person}</ol>
            </div>
        )
    }
}


export default App;
