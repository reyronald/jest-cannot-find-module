import { OktaAuth } from "@okta/okta-auth-js";

export function main() {
  const oktaAuth = new OktaAuth({
    issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}",
  });
  return oktaAuth;
}
