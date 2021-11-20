import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
import CommentDetail from './CommentDetail';

const SpinnerContainer = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const Editor = styled.div`
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

  #postTitle {
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
  .form-buttons {
    display: inline;
  }
  .submit,
  .publish {
    margin-right: 10px;
    padding: 10px;
    text-align: center;
    color: #ffffff;
    background-color: #000000;
    border-color: #7a7a7a;
    border-radius: 3px;
    font-weight: 100;
  }
  .publish {
    background-color: #466ec3;
  }
  .delete {
    padding: 10px;
    text-align: center;
    background-color: #14213d;
    border-color: #14213d;
    border-radius: 3px;
    color: #ffffff;
    font-weight: 100;
  }
  .message {
    color: #ca7d02;
  }
`;

const PostEditor = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  let params = useParams();
  let navigate = useNavigate();
  let token = localStorage.getItem('bearer');

  useEffect(() => {
    async function fetchBlogPostAPI() {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch(
          `https://rt-blog-api.herokuapp.com/posts/${params.id}`
        );
        const data = await response.json();
        setTitle(data.post.title);
        setText(data.post.text);
        setComments(data.post.comments);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    }
    fetchBlogPostAPI();
  }, []);
  const updatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://rt-blog-api.herokuapp.com/posts/${params.id}`,
        {
          method: 'PUT',
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
      if (response.status === 200) {
        setMessage(data.message);
        setTimeout(() => {
          navigate('/posts');
        }, 3000);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.status);
    }
  };
  const publishPost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://rt-blog-api.herokuapp.com/posts/${params.id}/publish`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        setMessage(data.message);
        setTimeout(() => {
          navigate('/posts');
        }, 3000);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.status);
    }
  };
  const deletePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://rt-blog-api.herokuapp.com/posts/${params.id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        setMessage(data.message);
        setTimeout(() => {
          navigate('/posts');
        }, 3000);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.status);
    }
  };
  return (
    <>
      {loading ? (
        <SpinnerContainer>
          <Spinner name="ball-spin-fade-loader" color="#FCA311" />
        </SpinnerContainer>
      ) : (
        <Editor>
          <h1>Post Editor</h1>
          <form onSubmit={updatePost}>
            <label htmlFor="postTitle">Title:</label>
            <input
              defaultValue={title}
              type="text"
              id="postTitle"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="postText">Text:</label>
            <textarea
              value={text}
              id="postText"
              rows="5"
              cols="33"
              maxLength="500"
              onChange={(e) => setText(e.target.value)}
              required
            />
            <div className="form-buttons">
              <input className="submit" type="submit" value="Update Post" />
              <button className="publish" type="button" onClick={publishPost}>
                Publish
              </button>
              <button className="delete" type="button" onClick={deletePost}>
                Delete
              </button>
            </div>
          </form>
          {error ? <div>Error: {error}</div> : <></>}
          <div className="message">{message}</div>
          <div>
            <h1>Comments</h1>
            {comments && comments.length > 0 ? (
              comments.map((comment) => {
                return (
                  <div key={comment._id}>
                    <CommentDetail comment={comment} />
                  </div>
                );
              })
            ) : (
              <p>There are no comments.</p>
            )}
          </div>
        </Editor>
      )}
    </>
  );
};

export default PostEditor;
