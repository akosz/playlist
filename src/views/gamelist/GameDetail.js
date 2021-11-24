import React from "react";
import { Link } from "react-router-dom";

export class GameDetail extends React.Component{
    render(){
        const game = this.props.selectedGame;
        return(
            !game ? null : 
            <div className="ui segment">
                <div className="ui items">
                <div className="item">
                    <div className="image">
                    <img src={game.thumbnailURL} />
                    </div>
                    <div className="content">
                    <Link to="" className="header">{game.title}</Link>
                    <div className="meta"><span>{game.publisher}</span><span>{game.release}</span></div>
                    <div className="extra">
                        <Link 
                        to="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/" 
                        className="ui button tiny blue button" target="_blank"
                        >
                        <i className="steam icon"></i>
                        Open on Steam
                        </Link>
                        <Link 
                        to="https://rockstargames.com/V/"
                        className="ui button tiny teal button" target="_blank"
                        >
                        <i className="globe icon"></i>
                        Open official website
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}