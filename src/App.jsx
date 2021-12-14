/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';

useEffect(async () => {
  const response = await axios.get(`https://repechaje-backend.herokuapp.com/posts/${userId}`);
  setPosts(response.data);
}, []);

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Registro</h1>
      <div className="login" aria-required>
        <form onSubmit={handleSubmit}>
          <label>
            email
            <br />
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <br />
          <label>
            password
            <br />
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
console.log(username)

export default Register;
