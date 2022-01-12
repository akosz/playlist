import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { playlistsStorage } from "./api/PlaylistsStorage";
import { tracksStorage } from "./api/TrackStorage";
import { App } from "./App";
import { examplePlaylists } from "./domain/playlist";
import { exampleTracks } from "./domain/track";
import { PlaylistsProvider } from "./views/state/PlaylistsService";
import { configureStore } from "./views/state/store";
import { TracksProvider } from "./views/state/TracksService";

const store = configureStore();

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <TracksProvider>
        <PlaylistsProvider>
          <App />
        </PlaylistsProvider>
      </TracksProvider>
    </Provider>,
    document.getElementById("root")
  );

const start = async () => {
  //const newPlaylists = await playlistsStorage.fill(examplePlaylists);
  //const newTracks = await tracksStorage.fill(exampleTracks);

  render();
};
start();
