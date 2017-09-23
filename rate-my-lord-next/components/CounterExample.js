import React, { Component } from 'react';
import firebase from 'firebase';

import { Button } from 'react-bootstrap';

export default class CounterExample extends Component {
    state = {
      count: null,
    };
  
    componentWillMount() {
      firebase.database().ref('counter').on('value', snapshot => {
        let count = snapshot.val().count;
        this.setState({ count });
      });
    }
  
    render() {
      return <Counter count={this.state.count} />;
    }
  }
  
  class Counter extends Component {
    render() {
      let { count } = this.props;
  
      return (
        <div style={{marginTop: 10, marginLeft: 20,}}>
          <span>
            Current count: {count === null ? 'Zero' : count}
          </span>
          <Button style={{
              marginLeft: 10,
          }} title="Add one" onClick={this._increaseCount}>Add one</Button>
        </div>
      );
    }
  
    _increaseCount = () => {
      firebase.database().ref('counter').set({
        count: (this.props.count || 0) + 1,
      });
    };
  }
  