import React from 'react';
import ReactDOM from 'react-dom';
import { playlistsStorage } from './api/PlaylistsStorage';
import { tracksStorage } from './api/TrackStorage';
import { App } from './App';
import { BlackAndWhite } from './BlackAndWhite';
import { examplePlaylists } from './domain/playlist';
import { exampleTracks } from './domain/track';
import { Game } from './Game';
import { PlaylistsProvider } from './views/state/PlaylistsService';
import { TracksProvider } from './views/state/TracksService';

const render = () =>
  ReactDOM.render(
    <TracksProvider>
      <PlaylistsProvider>
        <App />
      </PlaylistsProvider>
    </TracksProvider>,
    document.getElementById('root')
  );

const start = async () => {
  const newPlaylists = await playlistsStorage.fill(examplePlaylists)
  const newTracks = await tracksStorage.fill(exampleTracks) 

  render()
}
start()
