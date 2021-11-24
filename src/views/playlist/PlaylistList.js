import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

export function PlaylistList({playlist, selectedPlaylistId}){
    return(
        <div className="ui very relaxed selection list">
            {
            playlist.map(play =>  
                <Link to={`/playlist/${play.pl.id}`} className={classNames('item',{ active: selectedPlaylistId === play.pl.id})} key={play.pl.id}>
                    <i className="large compact disc middle aligned icon"></i>
                    <div className="content">
                        <a className="header">{play.pl.title}</a>
                        <div className="description">{play.tracks.length} songs</div>
                    </div>
                </Link>
            )
            }
           
            
        </div>
    )
}