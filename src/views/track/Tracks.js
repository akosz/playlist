import React, { useContext, useState } from 'react'
import { exampleTracks } from "../../domain/track";
import { PlaylistsContext } from '../state/PlaylistsService';
import { TracksContext } from '../state/TracksService';
import { Track } from './Track';
import { TrackForm } from './TrackForm';

export function Tracks() {
    const [open, setOpen] = useState(false)
    const {tracks, addNewTrack, editTrack, deleteTrack } = useContext(TracksContext)
    const [editedTrack, setEditedTrack] = useState({})

    const { deleteTrackFromMultiplePlaylist } = useContext(PlaylistsContext)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleTrack = track => {
        if(!track.id)
            //setTracks([...tracks, {...track, id: Date.now().toString()}])
            addNewTrack(track)
        else
            //setTracks(tracks.map(tr => tr.id != track.id ? tr : track))
            editTrack(track)
    }

    const handleNew = () =>{
        setEditedTrack({})
        handleOpen()
    }

    const handleEdit = track => {
        setEditedTrack(track)
        handleOpen()
    }

    const handleDelete = track => {
        //setTracks(tracks.filter(tr => tr.id !== track.id))
        deleteTrack(track)
        deleteTrackFromMultiplePlaylist(track.id)
    }

    return (
        <>
            <div className="ui container">
                <button onClick={handleNew} className="ui right floated green button" id="newModal">
                    <i className="plus icon"></i>
                    New track
                </button>
                <h1>Tracks</h1>
                <table className="ui celled striped table">
                    <thead>
                        <tr>
                            <th>Artist</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tracks.map(track =>
                                <Track onDelete={() => handleDelete(track)} onEdit={() => handleEdit(track)} track={track} key={track.id}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <TrackForm open={open} onClose={handleClose} onSubmit={handleTrack} track={editedTrack}/>
        </>
    )
}