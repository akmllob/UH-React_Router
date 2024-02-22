import React from "react";
import {Routes, Route} from 'react-router-dom'

import MainPage from "./page/Mainpage";
import AboutMe from "./page/Aboutme";
import Kreatif from "./page/Kreatif";
import Contact from "./page/Contact";

class Lakukan extends React.Component{
    render(){
        return(
            <Routes>
                <Route exact path="/" Component={MainPage}></Route>
                <Route path="/Aboutme" Component={AboutMe}></Route>
                <Route path="/Kreatif" Component={Kreatif}></Route>
                <Route path="/Contact" Component={Contact}></Route>
            </Routes>
        );
    }
}

export default Lakukan;