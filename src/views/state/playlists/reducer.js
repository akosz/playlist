import { examplePlaylists } from "../../../domain/playlist";
import { DELETE_TRACK } from "../tracks/actions";
import { ADD_PLAYLIST, ADD_TRACK_TO_PLAYLIST, SET_PLAYLISTS } from "./actions";

const initialState = examplePlaylists;

export const playlistsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_PLAYLISTS) return payload;

  if (type === ADD_PLAYLIST) {
    const playlists = state;
    const playlist = payload;

    return [...playlists, playlist];
  }

  if (type === ADD_TRACK_TO_PLAYLIST) {
    const playlists = state;
    const { playlistId, trackId } = payload;

    const plist = playlists.find((pl) => pl.id === playlistId);

    if (!plist) return state;

    if (plist.tracks.includes(trackId)) return state;

    const modifiedPlaylist = { ...plist, tracks: plist.tracks.concat(trackId) };
    return playlists.map((pl) =>
      pl.id !== playlistId ? pl : modifiedPlaylist
    );
  }

  if (type === DELETE_TRACK) {
    const playlists = state;
    const track = payload;

    return playlists.map((playlist) => ({
      ...playlist,
      tracks: playlist.filter((id) => id !== track.id),
    }));
  }

  return state;
};
