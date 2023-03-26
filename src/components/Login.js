import React, { useState } from 'react';
// import firebase from 'firebase/compat/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {  getAuth } from 'firebase/auth';
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email"  onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        {error && (
          <span className="error_message">Wrong email or password</span>
        )}
      </form>
    </div>
  );
};

export default Login;
