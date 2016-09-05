import { h, Component } from 'preact';
import { route } from 'preact-router';
import 'whatwg-fetch';
import { observer } from 'mobx-react';

@observer
export default class AddLift extends Component {
  constructor() {
    super();
    this.state.name = '';
  }

  onClick(e) {
    this.props.store.addLift(this.state.name).then(() => {
      return this.props.store.fetchLifts();
    }).then(() => {
      route('/lifts');
    });
  }

  render() {
    const store = this.props.store;
    return (
      <div>
        <input
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <div>
          <button
            onClick={e => this.onClick(e)}>Add</button>
        </div>
      </div>
    );
  }
}