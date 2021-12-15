import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const User = { password, email };
    axios.post('https://repechaje-backend.herokuapp.com/auth', User).then((res) => {
      console.log(res);
      // eslint-disable-next-line no-undef
      localStorage.setItem('User', JSON.stringify(res.data));
    });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="text" id="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
