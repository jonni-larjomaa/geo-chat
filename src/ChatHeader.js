import React from 'react';
import firebase from './firebase'

class ChatHeader extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
        <div className="chat-header">


          <Router>
            <div className="chat-header">
              <span className="title">GEO-CHAT</span>
              <span className="chat-location">Lat: { this.props.lat }</span>
              <span className="chat-location">Lon: { this.props.lon }</span>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
              </ul>
            </div>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
          </Router>
    );
  }
}
export default ChatHeader;
