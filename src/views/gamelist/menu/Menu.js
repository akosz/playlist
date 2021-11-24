import React from 'react';
import { NavLink } from 'react-router-dom';
import logo  from "../../../assets/logo2.png";

export class Menu extends React.Component{
    render(){
        return (
            <nav className="ui secondary menu">
                <img src={logo} />
                <NavLink to="/alma" className="item"><i className="home icon"></i> Home</NavLink>
                <NavLink to="" className="active item"><i className="headphones icon"></i> My game list</NavLink>
                <NavLink to="" className="item"><i className="music icon"></i> Games</NavLink>
                <NavLink to="" className="item"><i className="search icon"></i> Search</NavLink>
                <div className="ui right dropdown item">
                John Doe
                <i className="dropdown icon"></i>
                <div className="menu">
                    <div className="item"><i className="user icon"></i> Profile</div>
                    <div className="item"><i className="settings icon"></i> Settings</div>
                    <div className="item"><i className="sign out icon"></i>Log out</div>
                </div>
                </div>
            </nav>
        )
    }
}