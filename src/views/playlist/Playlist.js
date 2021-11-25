import React, { useContext, useState } from 'react';
import { PlaylistForm } from './PlaylistForm';
import { PlaylistList } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { TrackList } from './TrackList';

//Playlisteket tartalmazó fájl importálása
import { examplePlaylists } from '../../domain/playlist';
//Trackeket tartalmazó fájl importálása
import { exampleTracks } from '../../domain/track'
import { PlaylistsContext } from '../state/PlaylistsService';
import { useParams } from 'react-router';
import { TracksContext } from '../state/TracksService';

export function Playlist() {

    const {playlistId: selectedPlaylistId , trackId: selectedTackId} = useParams()

    const { playlist, addNewPlaylist } = useContext(PlaylistsContext)
    const {tracks} = useContext(TracksContext)

    const playlistsWithTracks = playlist.map(pl => ({
        ...pl,
        tracks: pl.tracks.map(trackId => tracks.find(track => track.id == trackId))
    }))

    const playList = playlistsWithTracks.find(play => play.id == selectedPlaylistId)

    const track = tracks.find(tr => tr.id == selectedTackId)


return (
    <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
            <div className="ui six wide column">
                <h3>Playlists</h3>
                {/*PlaylistForm komponens felel az új playlist-et felvevő form kezelésért. A komponensnek átadásra került  */}
                <PlaylistForm onSubmit={addNewPlaylist} />
                {/*PlaylistList komponens felel a playlistek-kel kapcsolatos műveletekre és megjelenítésekre. A komponensnek átadásra került a playlisteket tartalmazó objektum (playlist), az akutálisan kiválasztott playlist id-ja (selectedPlaylistId), továbbá még átadásra került az a függvény, aminek segítségével a kiválasztás inerakció kezelésre kerül (onSelect). */}
                <PlaylistList playlist={playlistsWithTracks} selectedPlaylistId={selectedPlaylistId}  />
            </div>
            <div className="ui ten wide column">
                {/*TrackList komponens felel a track-kekkel kapcsolatos műveletekre és megjelenítésekre. A komponensnek átadásra került az aktuálisan kiválasztott playlistet tartalmazó objektum (playlist), az akutálisan kiválasztott track id-ja (selectedTrackId), továbbá még átadásra került az a függvény, aminek segítségével a kiválasztás inerakció kezelésre kerül (onSelect).  */}
                <TrackList playlist={playList} selectedTrackId={selectedTackId}/>
            </div>
        </div>
        <div className="ui divider"></div>
        {/*TrackDetails komponens felel a kiválasztott track részletes adatainak megjelenítésért. A komponensnek átadásra került a kiválasztott track. */}
        <TrackDetails track={track} />
    </div>
);
}