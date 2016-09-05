import { h, Component } from 'preact';
import { route } from 'preact-router';
import { observer } from 'mobx-react';

@observer
export default class Lifts extends Component {
  render() {
    const lifts = this.props.store.lifts.map(lift => {
      return (
        <li onClick={e => route(`/lifts/${lift._id}`)}>
          <div>{lift.name}</div>
        </li>
      );
    });
    return (
      <div>
        <ul className="list">{lifts}</ul>
        <button onClick={e => route('/lifts/add')}>Add a Lift</button>
      </div>
    );
  }
}