import React from 'react';
import firebase from './firebase'

class ChatMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    let msgRef = firebase.database().ref('/chat/' + this.props.pos);
    msgRef.on('child_added', (snap) => {
          this.setState({
            messages: this.state.messages.concat({
              key: snap.key,
              username: snap.val().username,
              msg: snap.val().message
            })
          });
      })
  }

  render() {
    return (
        <div className="messages">
          { this.state.messages.map((msg) => (
            <div className="msg" key={msg.key}>
              <span className="chat-img pull-left">
                <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
              </span>
              <div className="clear-fix">
                <span className="username">{msg.username}</span>
                <span className="message">{msg.msg}</span>
              </div>
            </div>
          )
          )}
        </div>
    );
  }
}
export default ChatMessage;
