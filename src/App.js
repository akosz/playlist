import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./views/home/Home";
import { Layout } from "./views/layout/Layout";
import { NotFound } from "./views/notFound/NotFound";

import { Playlist } from "./views/playlist/Playlist";
import { restoreUser } from "./views/state/auth/actions";
import { getIsLoggedIn } from "./views/state/auth/selectors";
import { fetchPlaylists } from "./views/state/playlists/actions";
import { fetchTracks } from "./views/state/tracks/actions";
import { Tracks } from "./views/track/Tracks";

export function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(getIsLoggedIn)

  useEffect(() => {
    if(isLoggedIn){
      dispatch(fetchPlaylists());
      dispatch(fetchTracks());
    }
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    dispatch(restoreUser())
  }, [dispatch])

  return (
    <Router>
      {/*Sablon*/}
      <Layout>
        <Switch>
          {/*Kezdőlap*/}
          <Route exact path="/">
            <Home />
          </Route>
          {/*Playlist oldal*/}
          <Route path="/playlist/:playlistId?/:trackId?">
            <Playlist />
          </Route>
          <Route path="/tracks">
            <Tracks />
          </Route>
          {/*Le nem kezelt elérési út komponense*/}
          <Route>
            <NotFound error="A megadott elérési út nem található!" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
