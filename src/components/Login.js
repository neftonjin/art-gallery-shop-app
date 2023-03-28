import React, { useContext, useState } from 'react';
// import firebase from 'firebase/compat/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {  getAuth } from 'firebase/auth';
import  { useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
   //add state variable
  
  const navigateTo = useNavigate()
  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        console.log(user);
        console.log(user.email)
        
        navigateTo("/User");
        // ...
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };




  return (<>
   

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
    </>);
};

export default Login;
