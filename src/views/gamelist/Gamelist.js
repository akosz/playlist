import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

//import { examplePublishers } from "../../domain/publisher";

export class Gamelist extends React.Component {
  render() {
    return (
      <>
        <h3>Game lists</h3>
        <div className="ui very relaxed selection list">
          {this.props.publisherlist.map((game) => (
            <Link
              to={"/" + game.id}
              className={classNames("item", {
                active: game.id === this.props.selectedPublisherId,
              })}
              key={game.id}
              onClick={() => this.props.onSubmit(game.id)}
            >
              <i className="large compact warehouse middle aligned icon"></i>
              <div className="content">
                <Link to="" className="header">
                  {game.title}
                </Link>
                <div className="description">{game.tracks.length} games</div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}
