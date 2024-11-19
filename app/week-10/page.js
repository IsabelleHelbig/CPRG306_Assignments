"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="bg-slate-900 flex flex-col min-h-screen text-white ">
      <h1 className="text-3xl">Shopping List App</h1>
      <p>{user && `Signed in as ${user.displayName} (${user.email}).`}</p>
      <p>
        {user ? (
          <div className="flex flex-col items-start">
            <button onClick={firebaseSignOut}>Sign Out</button>
            <a href="/week-10/shopping-list">Continue to your Shopping List</a>
          </div>
        ) : (
          <button onClick={gitHubSignIn}>Sign in with Github</button>
        )}
      </p>
    </div>
  );
}
