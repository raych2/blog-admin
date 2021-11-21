import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CommentContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background: #ffffff;
  border-radius: 5px;
  border: 0.5px solid #e5e5e5;
  .comment-header {
    display: flex;
    flex-flow: row no wrap;
    justify-content: space-between;
  }
  .author {
    margin-bottom: 20px;
    color: #7a7a7a;
  }
  button {
    background: #14213d;
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }
  .delete-btn {
    color: #ca7d02;
    margin: 5px 0;
  }
`;

const CommentDetail = (props) => {
  const author = props.comment.author;
  const commentDate = props.comment.commentDate;
  const text = props.comment.text;
  const commentId = props.comment._id;
  const message = props.message;
  const setMessage = props.setMessage;
  const error = props.error;
  const setError = props.setError;
  let params = useParams();
  let navigate = useNavigate();
  let token = localStorage.getItem('bearer');

  const deleteComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://rt-blog-api.herokuapp.com/posts/${params.id}/comments/${commentId}`,
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
          navigate(0);
        }, 1500);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.status);
    }
  };

  return (
    <CommentContainer>
      <div className="comment-header">
        <p className="author">
          {author} • {commentDate}
        </p>
        <button>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="delete-btn"
            onClick={deleteComment}
          />
        </button>
      </div>
      <p>{text}</p>
    </CommentContainer>
  );
};

export default CommentDetail;
