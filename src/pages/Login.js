import {useState} from 'react';
import React from 'react';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
    method: 'POST',  
    headers: {
        'Content-type': 'application/json',
      },
    body : JSON.stringify({
        email,
        password,
    }),
    })

    const data = await response.json()

    if(data.user){
      localStorage.setItem('token', data.user)
      alert('login successful')
      window.location.href = '/dashboard'
    } else {
      alert('Please check your email and password')
    }

  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={loginUser}>
        
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <br/>
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <br/>
        <input type="submit" value="LOG IN" />
      </form>
    </div>
  );
}

export default Login;
