import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IndividualPost = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
const PostContainer = styled.div`
  height: auto;
  width: 50vw;
  margin: 10px 0;
  padding: 20px;
  background: #ffffff;
  border: 0.5px solid #7a7a7a;
  border-radius: 5px;

  h2 {
    margin: 5px auto;
  }
  hr {
    margin: 10px auto;
    border: none;
    border-top: 1px solid #000;
  }
  .published {
    color: #466ec3;
  }
  .unpublished {
    color: #ca7d02;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 80vw;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90%;
  }
`;
const Info = styled.div`
  max-width: 100%;
  text-align: left;
`;
const Author = styled.p`
  margin: 5px auto;
`;
const Text = styled.div`
  margin: 10px auto;
`;
const Data = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 auto;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`;
const PostLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #000;
`;

const PostPreview = (props) => {
  const id = props.post._id;
  const title = props.post.title;
  const author = props.post.author.username;
  const published = props.post.published;
  const postDate = props.post.postDate;
  const comments = props.post.comments;
  const postText = props.post.text.substring(0, 75) + '...';

  return (
    <IndividualPost>
      <PostContainer>
        <Info>
          <PostLink to={`/posts/${id}`}>
            <h2>{title}</h2>
          </PostLink>
          <Author>By: {author}</Author>
          <Text>{postText}</Text>
        </Info>
        <hr />
        <Data>
          <div>
            <p>{postDate}</p>
            {comments.length === 0 ? (
              <p>No comments</p>
            ) : comments.length === 1 ? (
              <p>{comments.length} Comment</p>
            ) : (
              <p>{comments.length} Comments</p>
            )}
          </div>
          {published ? (
            <p className="published">Published</p>
          ) : (
            <p className="unpublished">Unpublished</p>
          )}
        </Data>
      </PostContainer>
    </IndividualPost>
  );
};

export default PostPreview;
