import React, { Component } from 'react';
import {connect} from 'react-redux';
import Markov from '../../server/markov/markov';
import alice from '../../server/markov/books/alice';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddImage from './AddImage';

// import lookingglass from '../../server/markov/books/lookingglass';

// eventually this has to connect to have access to user, etc
class Chat extends Component {
  constructor() {
    super();
    // create a new markov chain and give it alice in wonderland
    const markov = new Markov(2);
    markov.add(alice);

    this.state = {
      markov: markov,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // add your message to the key/value table
    const yourMessage = ["you", e.target.message.value];

    this.state.markov.add(yourMessage);
    // messages1 and messages2 is used to delay the cat's response

    const catMessage = ["cat", this.state.markov.generate()];
    // immediately update state with your message and clear the text input
    this.props.addMessage(yourMessage);
    e.target.message.value = '';

    // wait 2 seconds and update state with the cat's message
    setTimeout(() => this.props.addMessage(catMessage), 2000);
  }


  render() {
    return (
      <div id="chat-input">
        <AddImage addMessage={this.props.addMessage}/>
        <form onSubmit={this.handleSubmit} style={{display: "inline-block"}}>
          <TextField
            id="message"
            hintText="Enter message here"
          />
          <RaisedButton
            id="tell-cat"
            type="submit"
            label="Tell Cat"
            primary={true}
            style={{margin:"10px"}}
          />
        </form>
      </div>
    )
  }
}

export default Chat;
