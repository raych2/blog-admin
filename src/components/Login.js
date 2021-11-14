import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  flex-flow: column wrap;
  align-content: center;

  form {
    margin: 20px auto;
    width: 20vw;
  }

  input {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    border-radius: 3px;
    border: 1px solid #7a7a7a;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  #username,
  #password {
    display: block;
    width: 100%;
    height: 40px;
    margin: 10px auto;
    font-size: 1em;
    padding-left: 5px;
  }
  .submit {
    margin-right: 10px;
    padding: 10px;
    text-align: center;
    color: #ffffff;
    background-color: #000000;
    border-color: #7a7a7a;
    border-radius: 3px;
    font-weight: 100;
  }
`;
const NavLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  display: inline;
  color: #fca311;
`;

const Login = ({setAuthorizedUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();

  const logInUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://rt-blog-api.herokuapp.com/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const auth = await response.json();
      if (auth.token) {
        localStorage.setItem('bearer', auth.token);
        localStorage.setItem('name', username);
        setAuthorizedUser(true);
        navigate('/posts');
      }
    } catch (err) {
      console.log(err.message);
      setError(err.status);
    }
  };
  return (
    <LoginForm>
      <h1>Log in</h1>
      <form onSubmit={logInUser}>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
      <div>
        Don't have an account? <NavLink to="/signup">Sign up</NavLink>
      </div>
      {error ? <div>Error: {error}</div> : <></>}
    </LoginForm>
  );
};

export default Login;
