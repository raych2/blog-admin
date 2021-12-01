import React, { useState } from 'react';
import styled from 'styled-components';
import NavLink from './shared/NavLink';
import ErrorMessage from './shared/ErrorMessage';
import SuccessMessage from './shared/SuccessMessage';
import { useNavigate } from 'react-router-dom';

const SignUpForm = styled.div`
  margin: 80px auto 0 auto;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  width: 20vw;

  form {
    margin: 20px auto;
    width: 100%;
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
    width: 90%;
  }
`;
const InlineNavLink = styled(NavLink)`
  display: inline;
  color: #fca311;
`;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  let navigate = useNavigate();

  const signUpUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://rt-blog-api.herokuapp.com/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();
      if (result.errors) {
        let signUpErrors = [];
        result.errors.forEach((error) => {
          signUpErrors.push(`${error.msg} `);
        });
        setError(signUpErrors);
      } else {
        setError('');
        setMessage(
          `${result.message}. You'll be redirected to the Login page to log in.`
        );
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SignUpForm>
      <h1>Sign up</h1>
      <form onSubmit={signUpUser}>
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
        Already have an account?{' '}
        <InlineNavLink to="/login">Log in</InlineNavLink>
      </div>
      {error ? <ErrorMessage>Error: {error}</ErrorMessage> : <></>}
      <SuccessMessage>{message}</SuccessMessage>
    </SignUpForm>
  );
};

export default SignUp;
