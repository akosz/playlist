import  React  from "react";
import { NavLink } from "react-router-dom";
export class Header extends React.Component{
    render(){
        return(
            <div id="header">
                <div id="logo">
                    <div id="logo_text">
                    <h1><a href="index.html">black<span className="logo_colour">&amp;white</span></a></h1>
                    <h2>Black &amp; White Website Template.</h2>
                    </div>
                </div>
                <div id="menubar">
                    <ul id="menu">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/example" >Examples</NavLink></li>
                    <li><NavLink exact to="/page">A Page</NavLink></li>
                    <li><NavLink exact to="/anotherPage">Another Page</NavLink></li>
                    <li><NavLink exact to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>
                </div>
        )
    }
}