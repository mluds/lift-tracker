import React from 'react';
import { browserHistory } from 'react-router';
import 'whatwg-fetch';

export default class AddLift extends React.Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  addLift() {
    fetch('/lifts/add', {
      method: 'post',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name
      })
    }).then(res => {
      browserHistory.push('/lifts');
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.addLift()}>Add</button>
      </div>
    );
  }
}