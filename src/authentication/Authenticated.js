import { useOktaAuth } from "@okta/okta-react";
import React, { useEffect } from "react";
import { toRelativeUrl } from "@okta/okta-auth-js";
import { Outlet } from "react-router-dom";

const Authenticated = () => {
  const { oktaAuth, authState } = useOktaAuth();
  console.log(oktaAuth, authState, "Auth Login");
  useEffect(() => {
    oktaAuth.handleLoginRedirect();
    if (!authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
      const originalUri = toRelativeUrl(
        window.location.href,
        window.location.origin
      );
      oktaAuth.setOriginalUri(originalUri);
      oktaAuth.signInWithRedirect();
    }
  }, [oktaAuth, !!authState, authState?.isAuthenticated]);

  if (!authState || !authState?.isAuthenticated) {
    return <div className="loader">{/* your loader component*/}</div>;
  }
  return <Outlet />;
};

export default Authenticated;
