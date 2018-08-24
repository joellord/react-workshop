import Emitter from "es6-event-emitter";

let state = {};

class Store extends Emitter {
  constructor(initialState) {
    super();
    state = initialState;
  }

  updateGlobalState(newState) {
    state = Object.assign({}, state, newState);
    this.trigger("stateChange");
  }

  getGlobalState() {
    return state;
  }

  getTokens() {
    return state.tokens;
  }

  subscribe(cb) {
    this.on("stateChange", cb);
  }

  unsubscribe(cb) {
    this.off("stateChange", cb);
  }

}

const instance = new Store();

export default instance;