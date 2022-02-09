import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { Menu as MenuComp } from "semantic-ui-react";

import logo from '../../assets/logo.png'
import { logout } from '../state/auth/actions';
import { getIsLoggedIn, getUser } from '../state/auth/selectors';

export function Menu(){
    const isLoggedIn = useSelector(getIsLoggedIn)
    const user = useSelector(getUser)

    const dispatch = useDispatch()


    const handleClick = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return(
        <nav className="ui secondary menu">
            <img src={logo} alt="logo"/>
            <NavLink className="item" exact to="/"><i className="home icon"></i> Home</NavLink>
            <NavLink className="item" to="/playlist"><i className="headphones icon"></i> My Playlists</NavLink>
            <NavLink className="item" to="/tracks"><i className="music icon"></i> Tracks</NavLink>
            <NavLink className="item" to="/search"><i className="search icon"></i> Search</NavLink>
            <MenuComp.Menu position='right'>
                {isLoggedIn ?
                    <a onClick={handleClick} href="#" className='item'>
                        Log out ({user.email})
                    </a>
                    :
                    <Link to="/" className='item'>Log in</Link>
                }
            </MenuComp.Menu>
        </nav>
    )
}