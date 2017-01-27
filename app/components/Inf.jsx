import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Infinite from 'react-infinite';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';



export default class Inf extends Component{
    constructor() {
      super();
      this.state = {
        elements: [],
        isInfiniteLoading: false
      }
      this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this)
    }
    componentDidMount() {
      setInterval(() => {
        var elemLength = this.state.elements.length,
            newElements = this.buildElements(elemLength, elemLength + 1);
        this.setState({
            elements: this.state.elements.concat(newElements)
        });
      }, 5000);
    }

    buildElements(start, end) {
        var elements = [];
        for (var i = start; i < end; i++) {
            elements.push(<ListItem
          key={i}
          style={{height: "120px"}}
          leftAvatar={<Avatar src="images/kerem-128.jpg" />}
          primaryText="Birthday gift"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Kerem Suer</span> --
              Message {i} Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2}
        />)
        }
        return elements;
    }

    handleInfiniteLoad() {
        this.setState({
            isInfiniteLoading: true
        });
        setTimeout(() => {
            var elemLength = this.state.elements.length,
                newElements = this.buildElements(elemLength, elemLength + 20);
            this.setState({
                isInfiniteLoading: false,
                elements: newElements.concat(this.state.elements)
            });
        }, 2000);
    }

    elementInfiniteLoad() {
        return <div>
          Loading
        </div>;
    }

    render() {
        console.log(this.state)
        return (
            <List>
              <Infinite elementHeight={120}
                containerHeight={window.innerHeight*.7}
                infiniteLoadBeginEdgeOffset={300}
                onInfiniteLoad={this.handleInfiniteLoad}
                loadingSpinnerDelegate={this.elementInfiniteLoad()}
                isInfiniteLoading={this.state.isInfiniteLoading}
                timeScrollStateLastsForAfterUserScrolls={1000}
                displayBottomUpwards={true}
                >

                  {this.state.elements}

              </Infinite>
            </List>
            );
    }
};
