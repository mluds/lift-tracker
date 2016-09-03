import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span><Link to={'/'}>Lift Tracker</Link></span>
          <span><Link to={'/lifts'}>Lifts</Link></span>
          <span><Link to={'/splits'}>Splits</Link></span>
          <span><Link to={'/charts'}>Charts</Link></span>
        </div>
        {this.props.children}
      </div>
    );
  }
}