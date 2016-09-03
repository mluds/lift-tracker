import React from 'react';
import { Link } from 'react-router';

export default class Lifts extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div><Link to={'/lifts/squats'}>Squats</Link></div>
          <div>Bench Press</div>
          <div>Dumb Bell Curls</div>
        </div>
        <Link to={'/lifts/add'}>Add a Lift</Link>
      </div>
    );
  }
}