"use client";

import { createAuthClient } from "better-auth/react";
import { useState, type FormEvent } from "react";

const auth = createAuthClient();

export function SignIn() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPending(true);
    setError("");
    try {
      const result = await auth.signIn.email({ email: String(data.get("email")), password: String(data.get("password")), rememberMe: false });
      if (!result.error) {
        window.location.replace("/admin");
        return;
      }
      setError(result.error.status === 429 ? "Too many attempts. Try again shortly." : "Unable to sign in. Check your email and password.");
    } catch {
      setError("Sign-in is temporarily unavailable.");
    }
    setPending(false);
  }

  return <form className="admin-form" method="post" onSubmit={signIn}>
    <label>Email address<input name="email" type="email" autoComplete="username" required /></label>
    <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
    <button className="button button-primary" disabled={pending}>{pending ? "Signing in…" : "Sign in"}</button>
    {error && <p role="alert" className="form-error">{error}</p>}
  </form>;
}

export function SignOut() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  async function signOut() {
    setPending(true);
    setError(false);
    try {
      const result = await auth.signOut();
      if (!result.error) {
        window.location.replace("/admin/login");
        return;
      }
    } catch {
      setError(true);
    }
    setError(true);
    setPending(false);
  }
  return <div><button type="button" className="button button-primary" onClick={signOut} disabled={pending}>{pending ? "Signing out…" : "Sign out"}</button>
    {error && <p role="alert" className="form-error">Sign-out failed. Try again.</p>}</div>;
}
