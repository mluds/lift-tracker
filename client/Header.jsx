import { h, Component } from 'preact';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <a href="/">Lift Tracker</a>
          <a href="/lifts">Lifts</a>
          <a href="/splits">Splits</a>
          <a href="/charts">Charts</a>
        </nav>
      </header>
    );
  }
}
