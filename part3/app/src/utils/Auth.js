import auth0 from "auth0-js";
import store from "./Store";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "react-workshop.auth0.com",
    clientID: "dOCe36dXk8XdhJekm7wJKEkB19jqfRtg",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

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
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    let tokens = {
      accessToken: authResult.accessToken,
      idToken: authResult.idToken,
      expiresAt: expiresAt
    };
    store.updateGlobalState({tokens: this.tokens, isLoggedIn: true});
    localStorage.setItem("tokens", JSON.stringify(tokens));
  }

  logout() {
    store.updateGlobalState({tokens: {}, isLoggedIn: false});
    localStorage.removeItem("tokens");
  }

  isAuthenticated() {
    let tokens = JSON.parse(localStorage.getItem("tokens"));
    return (tokens && tokens.expiresAt > new Date().getTime());
  }
}