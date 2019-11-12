import React, { Component } from "react";

// participantId
// type
// message
// time
// timestamp

export default class Chat extends Component {
  render() {
    const messages = this.props.store.chatEvents
      .sort((a, b) => a.timestamp - b.timestamp)
      .map((m, i) => {
        const participantName = this.props.store.participants.find(
          user => user.id === m.participantId
        ).name;

        const participantAvatar = this.props.store.participants[
          this.props.store.participants.indexOf(
            this.props.store.participants.find(
              user => user.id === m.participantId
            )
          )
        ].avatar;

        const formatAMPM = date => {
          let hours = date.getHours();
          let minutes = date.getMinutes();
          let ampm = hours >= 12 ? "pm" : "am";
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? "0" + minutes : minutes;
          let strTime = hours + ":" + minutes + " " + ampm;
          return strTime;
        };

        const msgTime = formatAMPM(new Date(m.timestamp));

        if (m.type === "message") {
          return (
            <li key={i} className="chat-message">
              <div className="chat-avatar">
                <img alt="user avatar" src={participantAvatar} />
              </div>
              <div>
                <h2>
                  {participantName} <span>{msgTime}</span>
                </h2>
                <p>{m.message}</p>
              </div>
            </li>
          );
        } else {
          let message;

          switch (m.type) {
            case "thumbs-up":
              message = `${participantName} gave a thumbs up 👍`;
              break;
            case "thumbs-down":
              message = `${participantName} gave a thumbs down 👎`;
              break;
            case "raise-hand":
              message = `${participantName} raised their hand ✋`;
              break;
            case "clap":
              message = `${participantName} clapped 👏`;
              break;
            case "join":
              message = `${participantName} joined`;
              break;
            case "leave":
              message = `${participantName} left`;
              break;
            case "join-stage":
              message = `${participantName} joined the stage`;
              break;
            case "leave-stage":
              message = `${participantName} left the stage`;
              break;
            default:
              message = "error retrieving message";
              break;
          }

          return (
            <li key={i} className="chat-reaction">
              <span>{message}</span>
            </li>
          );
        }
      });

    return (
      <section className="all-chat">
        <ol>{messages}</ol>
      </section>
    );
  }
}
