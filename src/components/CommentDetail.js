import React from 'react';
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
  .delete-btn {
    color: #ca7d02;
  }
`;

const CommentDetail = (props) => {
  const author = props.comment.author;
  const commentDate = props.comment.commentDate;
  const text = props.comment.text;

  return (
    <CommentContainer>
      <div className="comment-header">
        <p className="author">
          {author} • {commentDate}
        </p>
        <FontAwesomeIcon icon={faTrashAlt} className="delete-btn" />
      </div>
      <p>{text}</p>
    </CommentContainer>
  );
};

export default CommentDetail;
