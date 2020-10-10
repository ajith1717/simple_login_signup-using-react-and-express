import React from 'react'
import {Route, BrowserRouter as Router} from "react-router-dom";
import Hmome from "./Signup";
import App1 from "./Login";

function App() {
    console.log("come 12 3")
    return (
        <Router>
            
            <Route path="/login" component={App1} />
            <Route path="/signup" exact component={Hmome} />
        </Router>
    )
}

export default App
