import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { playlistsReducer } from "./playlists/reducer";
import { tracksReducer } from "./tracks/reducer";

const rootReducer = combineReducers({
  tracks: tracksReducer,
  playlists: playlistsReducer,
});

const logger = createLogger({
  collapsed: true,
});

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(logger));
};
