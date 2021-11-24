import React, { useEffect, useState } from 'react'
import { playlistsStorage } from '../../api/PlaylistsStorage'
import { examplePlaylists } from '../../domain/playlist'

const usePlaylistsService = () => {
    //Adatok
    const [playlist, setPlaylist] = useState([])

    useEffect(() => {
        const getAll = async () => setPlaylist(await playlistsStorage.getAll())
        getAll()
    }, [])


    //Műveletek

    /*
        Új playlist létrehozásához szükséges függvény.
        A függvény egy argomentumot tartalmaz, ami a hozzáadni kívánt playlist neve.
        A függvény törzsében kerül kiszámításra:
            - az új playlist id-ja. Az id a reduce függvénnyel kerül meghatározására. (A reduce függvényről bővebb információ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
            - az új playlist hozzáadása a playlisteket tartalmazó objektumhoz.
    */
    const addNewPlaylist = async title => {
        const newPlaylist = await playlistsStorage.create({ title, tracks: [] })
        setPlaylist([...playlist, newPlaylist])

    }

    const deleteTrackFromPlaylist = async (pl, trackId) => {
        const modifiedPlaylist = {...pl, tracks: pl.tracks.filter(tr => tr.id != trackId)}
        return await playlistsStorage.update(modifiedPlaylist)
    }

    const deleteTrackFromMultiplePlaylist = async trackId => {
        setPlaylist(await Promise.all(playlist.map(async pl => await deleteTrackFromPlaylist(pl, trackId))))
    }

    //Service
    const playlistsService = { playlist, addNewPlaylist, deleteTrackFromPlaylist, deleteTrackFromMultiplePlaylist }

    return playlistsService
}

export const PlaylistsContext = React.createContext();
export const PlaylistsProvider = ({ children }) => {
    const playlistsService = usePlaylistsService()
    return <PlaylistsContext.Provider value={playlistsService}>{children}</PlaylistsContext.Provider>
}