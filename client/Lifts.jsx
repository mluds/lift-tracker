import React from 'react';

export default class Lifts extends React.Component {
  render() {
    return (
      <div>
        <div><Link to={'/lifts/squats'}>Squats</Link></div>
        <div>Bench Press</div>
        <div>Dumb Bell Curls</div>
      </div>
    );
  }
}