import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

export class Games extends React.Component {
  render() {
    return (
      <>
        <h3>Classics</h3>
        <div className="ui very relaxed selection list">
          {this.props.publisherList.tracks.map((game, index) =>
            index % 3 === 0 ? (
              <Link
                to={"/" + this.props.publisherList.id + "/" + game.id}
                className={cn("item", {
                  active: game === this.props.selectedGameId,
                })}
                key={game.id}
                onClick={() => this.props.onSelect(game.id)}
              >
                <i className="large gamepad middle aligned icon"></i>
                <div className="content">
                  <Link to="" className="header">
                    {game.title}
                  </Link>
                  <div className="description">{game.publisher}</div>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </>
    );
  }
}
