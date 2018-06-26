import React from 'react';
import firebase from './firebase'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Chat extends React.Component {
  render() {
    return (
      <div>
          <ChatHeader lat={this.props.pos.lat} lon={this.props.pos.lon} />
          <ChatMessage pos={this.props.pos.hash}/>
          <ChatInput pos={this.props.pos.hash}/>
      </div>
    );
  }
}
export default Chat;
