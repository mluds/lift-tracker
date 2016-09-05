import { h, render } from 'preact';
import 'normalize.css/normalize.css';
import './less/styles.less';
import App from './App.jsx';
import Store from './Store.jsx';

const store = new Store;
store.fetchLifts();
render(<App store={store} />, document.body);

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <Route path="lifts" component={Lifts} />
//       <Route path="lifts/add" component={AddLift} />
//       <Route path="splits" component={Lifts} />
//       <Route path="charts" component={Lifts} />
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );
