import React, {Component} from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
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

  <div style={{marginLeft: "15%", marginRight: "15%"}}>
    <GridList
      style={{
        height: window.innerHeight*.6,
        overflowY: 'auto'
      }}
      cols={1}
      cellHeight="auto"
      >
      {this.props.messages.map((message, index) => {return (
        <div key={index} style={{textAlign: (message[0] === 'cat') ? "left" : "right"}}>
          <Paper id="statement-bubble" zDepth={1} style={{display: "inline-block"}} className={`statement-by-${message[0]}`}>
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
        </div>
      )})}
    </GridList>
    <Chat addMessage={this.props.addMessage}/>
  </div>
)}}

export default connect()(ChatBox);
