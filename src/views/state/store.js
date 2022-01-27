import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { playlistsReducer } from "./playlists/reducer";
import { tracksReducer } from "./tracks/reducer";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  tracks: tracksReducer,
  playlists: playlistsReducer,
  auth: authReducer
});

const logger = createLogger({
  collapsed: true,
});

export const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
};
