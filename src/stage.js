import React, { Component } from "react";

export default class Stage extends Component {
  render() {
    const people = this.props.store.participants
      .filter(u => u.onStage === true)
      .map(p => (
        <section key={p.id}>
          <div>
            <h2>{p.name}</h2>
          </div>
          <div>
            <img alt="user avatar" src={p.avatar} />
          </div>
        </section>
      ));

    return <section className="stage">{people}</section>;
  }
}
