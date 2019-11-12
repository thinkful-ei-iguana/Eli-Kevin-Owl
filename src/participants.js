import React, { Component } from "react";

// props: id, name, avatar, inSession, onStage

export default class Participants extends Component {
  render() {
    const people = this.props.store.participants
      .filter(u => u.inSession === true)
      .map(m => (
        <div key={m.id}>
          <img alt="user avatar" src={m.avatar} />
          <div>
            <h2>{m.name}</h2>
            <div>
              <b className={`in-session-${m.inSession}`} />
              <span>{`${m.onStage ? "on stage" : "not on stage"}`}</span>
              <button className="boot-user">Boot</button>
            </div>
          </div>
        </div>
      ));

    return <section className="stage-sidebar">{people}</section>;
  }
}
