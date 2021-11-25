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
        const modifiedPlaylist = {...pl, tracks: pl.tracks.filter(id => id != trackId)}
        return await playlistsStorage.update(modifiedPlaylist)
    }

    const deleteTrackFromMultiplePlaylist = async trackId => {
        setPlaylist(await Promise.all(playlist.map(async pl => await deleteTrackFromPlaylist(pl, trackId))))
    }

    const addTrackToPlaylist = async (playlistId, trackId) => {
        const plist = playlist.find(pl => pl.id == playlistId)

        if(!plist) return

        if(plist.tracks.includes(trackId)) return

        const modifiedPlaylist = {...plist, tracks: plist.tracks.concat(trackId)}
        const updatedPlaylist = await playlistsStorage.update(modifiedPlaylist)
        setPlaylist(playlist.map(pl => pl.id !== playlistId ? pl : updatedPlaylist))
    }

    //Service
    const playlistsService = { playlist, addNewPlaylist, deleteTrackFromPlaylist, deleteTrackFromMultiplePlaylist, addTrackToPlaylist }

    return playlistsService
}

export const PlaylistsContext = React.createContext();
export const PlaylistsProvider = ({ children }) => {
    const playlistsService = usePlaylistsService()
    return <PlaylistsContext.Provider value={playlistsService}>{children}</PlaylistsContext.Provider>
}