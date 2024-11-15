"use client"
import React from "react";


export default function LoginHandlers() {

  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const username = e.currentTarget.username.value;
    // const password = e.currentTarget.username.value;

    const response = await fetch('/api/login', {
      // envia os dados para rota api/login
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      window.location.href = '/';

    } else {
      setMessage('Falha ao Logar...');
    }



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

