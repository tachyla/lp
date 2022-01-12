import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
    render(){
        return(
            <div>
                <h1 className="Admission-dashboard-header"> Admission Dashboard </h1>
                < Table />
            </div>
        );
    }
}

export default App;
