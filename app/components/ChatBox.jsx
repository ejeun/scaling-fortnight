import React, {Component} from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Chat from './Chat';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
//import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import AddPhoto from 'material-ui/svg-icons/image/add-a-photo';

// const mapStateToProps = state => {
//   return {
//     messages: state.chat.messages,
//   };
// };


class ChatBox extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (

  <div>
    <List style={{  maxHeight: "85%"}}>
      {this.props.messages.map((message, index) => {return (
        <Paper id="statement-bubble" key={index} zDepth={1} className={`statement-by-${message[0]}`}>
          <ListItem
            leftAvatar={message[0] === 'cat' ? <Avatar src="https://cdn2.iconfinder.com/data/icons/pet-2/100/06-512.png" /> : null}
            rightAvatar={message[0] === 'you' ? <Avatar src="http://www.freeiconspng.com/uploads/face-head-woman-female-icon-2.png" /> : null}
            secondaryText={
               (!message[2])
               ? <p> {message[1]} </p>
               : <img src={message[1]}/>
            }
            secondaryTextLines={2}
          />
        </Paper>
      )})}
    </List>
    <Chat addMessage={this.props.addMessage}/>
  </div>
)}}

export default connect()(ChatBox);
