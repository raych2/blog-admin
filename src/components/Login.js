import React, { useState } from 'react';
import styled from 'styled-components';
import NavLink from './shared/NavLink';
import ErrorMessage from './shared/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const LoginForm = styled.div`
  margin: 80px auto 0 auto;
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
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    form {
      width: 50vw;
    }
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    form {
      width: 90%;
    }
  }
`;
const InlineNavLink = styled(NavLink)`
  display: inline;
  color: #fca311;
`;

const Login = ({ setAuthorizedUser, setUserData }) => {
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
        setUserData(username);
        setAuthorizedUser(true);
        navigate('/posts');
      } else {
        setError(auth.message);
      }
    } catch (err) {
      console.log(err);
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
        Don't have an account?{' '}
        <InlineNavLink to="/signup">Sign up</InlineNavLink>
      </div>
      {error ? <ErrorMessage>Error: {error}</ErrorMessage> : <></>}
    </LoginForm>
  );
};

export default Login;
