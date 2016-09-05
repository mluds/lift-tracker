import { h, Component } from 'preact';
import Router from 'preact-router';
import Header from './Header.jsx';
import Lifts from './Lifts.jsx';
import AddLift from './AddLift.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Lifts path="/lifts" store={this.props.store} />
          <AddLift path="/lifts/add" store={this.props.store} />
        </Router>
      </div>
    );
  }
}
