import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { exampleGames } from "./domain/game";
import { examplePublishers } from "./domain/publisher";
import { GameDetail } from "./views/gamelist/GameDetail";
import { GameForm } from "./views/gamelist/GameForm";
import { Gamelist } from "./views/gamelist/Gamelist";
import { Games } from "./views/gamelist/Games";
import { Menu } from "./views/gamelist/menu/Menu";
import { Clock, Valami } from "./Valami";

export function Game() {
  const [selectedPublisherId, setSelectedPublisherId] = useState(1);
  const [selectedGameId, setSelectedGameId] = useState(1);

  const [publisherlist, setPublisherlist] = useState(examplePublishers);

  const publisherList = examplePublishers.find(
    (pl) => pl.id === selectedPublisherId
  );
  const game = exampleGames.find((gm) => gm.id === selectedGameId);

  const handleGamelistChange = (e) => {
    console.log(e);
    setSelectedPublisherId(e);
    setSelectedGameId(null);
  };

  const addNewGamelist = function (title) {
    const id =
      publisherlist.reduce((maxId, pl) => Math.max(maxId, pl.id), 200) + 1;
    setPublisherlist([...publisherlist, { id, title, tracks: [] }]);
  };

  //-----------------------------------

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Clock />
        <div className="ui container">
          <Menu />
          <div className="ui container">
            <h1>My game list</h1>
            <div className="ui stackable">
              <div className="ui six wide row">
                <Gamelist
                  publisherlist={publisherlist}
                  selectedPublisherId={selectedPublisherId}
                  onSubmit={handleGamelistChange}
                />
                <GameForm onSubmit={addNewGamelist} />
              </div>
              <div className="ui ten wide row">
                <Games
                  publisherList={publisherList}
                  selectedGameId={selectedGameId}
                  onSelect={setSelectedGameId}
                />
              </div>
            </div>
            <div className="ui divider"></div>
            <GameDetail selectedGame={game} />
          </div>
        </div>
      </Route>
      <Route path="/alma">
        <Valami />
      </Route>
    </BrowserRouter>
  );
}
