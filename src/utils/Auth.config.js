const config = {
  domain: 'auth0-ably.auth0.com',
  clientID: 'ryzUc5KDMxLAv3G9Gq528jycd5IwbDSh',
  redirectUri: 'http://localhost:3000/callback',
  audience: 'https://auth0-ably.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid email'
};

export default config;