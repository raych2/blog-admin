import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NewPost = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  form {
    margin: 20px auto;
    width: 40vw;
  }
  input,
  button {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    border-radius: 3px;
    border: 1px solid #7a7a7a;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  #newPostTitle {
    display: block;
    width: 100%;
    height: 40px;
    margin: 10px auto;
    font-size: 1em;
    padding-left: 5px;
  }
  textarea {
    display: block;
    width: 100%;
    height: auto;
    margin: 10px auto;
    font-size: 1em;
    padding: 10px 0 0 5px;
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
  .error {
    color: #A9232E;
  }
  .message {
    color: #ca7d02;
  }
  @media (max-width: 400px) {
    form {
      width: 90%;
    }
  }
`;
const PostForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  let navigate = useNavigate();
  let token = localStorage.getItem('bearer');

  const createNewPost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://rt-blog-api.herokuapp.com/posts/create`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            text,
          }),
        }
      );
      const data = await response.json();
      if(data.errors) {
        let errorMessages = [];
        data.errors.forEach(error => {
          errorMessages.push(`${error.msg} `);
        })
        setError(errorMessages);
      } else {
        setError('');
        setMessage(data.message);
        setTimeout(() => {
          navigate('/posts');
        }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <NewPost>
      <h1>Create New Post</h1>
      <form onSubmit={createNewPost}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="newPostTitle"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="postText">Text:</label>
        <textarea
          id="newPostText"
          rows="5"
          cols="33"
          maxLength="500"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
      {error ? <div className='error'>Error: {error}</div> : <></>}
      <div className="message">{message}</div>
    </NewPost>
  );
};

export default PostForm;
