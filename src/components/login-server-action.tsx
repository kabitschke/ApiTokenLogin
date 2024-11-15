"use client"


import { login } from "@/actions/login";
import React from "react";

export default function LoginServer() {

  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const response = await login(username, password);

  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User name:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={e => setUserName(e.target.value)}

        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}

        />

        <p style={{ color: 'red' }}>{message}</p>
        <button type="submit">Login</button>
      </form>

    </div>
  );

}