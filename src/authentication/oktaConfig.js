export const oktaConfig = {
  clientId: `0oaehpsdrnil8RjBc697`,
  issuer: `https://trial-9524431.okta.com/oauth2/default`,
  redirectUri: `http://localhost:3000/sign/callback`, // this makes it so redirects to login if not logged in for secure routes
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
