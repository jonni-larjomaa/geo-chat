import firebase from './firebase'
import React from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasnick: false,
      nick: '',
      message:''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setNickName = this.setNickName.bind(this);
  }

  setNickName(event){
    event.preventDefault();
    this.setState({ hasnick: true });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    if(event.charCode === 13){
      event.preventDefault();
      firebase.database().ref('/chat/'+this.props.pos).push({
        username: this.state.nick,
        message: this.state.message
      })

      this.setState({
        message: ''
      })
    }
  }

  render() {

    if(!this.state.hasnick){
      return (
        <div className="chat-input">
        <div className="input-group">
          <input name="nick" type="text" value={this.state.nick} onChange={this.handleChange} className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.setNickName}>Set!</button>
          </span>
        </div>
        </div>
      )
    }

    return (
      <div className="chat-input">
      <div className="input-group">
        <span className="input-group-addon" id="sizing-addon2">{this.state.nick}</span>
        <input name="message" type="text" value={this.state.message} className="form-control" onChange={this.handleChange} onKeyPress={this.handleSubmit} />
      </div>
      </div>
    );
  }
}

export default ChatInput
