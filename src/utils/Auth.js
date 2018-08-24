import auth0 from "auth0-js";
import store from "./Store";

const DEV_ENV = true;

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "react-workshop.auth0.com",
    clientID: "dOCe36dXk8XdhJekm7wJKEkB19jqfRtg",
    redirectUri: "http://localhost:3000/callback",
    audience: "react-workshop-api",
    responseType: "token id_token",
    scope: "openid"
  });

  tokens = {};

  login() {
    this.auth0.authorize();
  }

  handleAuth(cb) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        cb();
      } else if (err) {
        console.log(err);
      }
    })
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    this.tokens.accessToken = authResult.accessToken;
    this.tokens.idToken = authResult.idToken;
    this.tokens.expiresAt = expiresAt;
    store.updateGlobalState({tokens: this.tokens});
    if (DEV_ENV) {
      localStorage.setItem("tokens", JSON.stringify(this.tokens));
    }
  }

  logout() {
    this.tokens = {};
    store.updateGlobalState({tokens: {}});
    if (DEV_ENV) {
      localStorage.removeItem("tokens");
    }
  }

  isAuthenticated() {
    let state = store.getGlobalState();
    if (DEV_ENV && !state.tokens.accessToken && localStorage.getItem("tokens")) {
      state.tokens = JSON.parse(localStorage.getItem("tokens"));
      store.updateGlobalState(state);
    }
    return new Date().getTime() < state.tokens.expiresAt && state.tokens.accessToken;
  }
}