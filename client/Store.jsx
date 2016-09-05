import { observable } from 'mobx';

export default class Store {
  @observable lifts = [];

  fetchLifts() {
    return fetch('/lifts/data', {
      credentials: 'same-origin'
    }).then(res => {
      return res.json();
    }).then(json => {
      this.lifts = json;
      return this.lifts;
    });
  }

  addLift(name) {
    return fetch('/lifts/add', {
      method: 'post',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name })
    });
  }
}
