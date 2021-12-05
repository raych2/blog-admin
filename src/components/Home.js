import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostPreview from './PostPreview';
import LoadingIndicator from './shared/LoadingIndicator';
import ErrorMessage from './shared/ErrorMessage';

const PostList = styled.div`
  margin-top: 80px;
  display: flex;
  flex-flow: column nowrap;
  align-content: space-evenly;

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Home = ({ userData }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const blogAPI = 'https://rt-blog-api.herokuapp.com/posts';

  useEffect(() => {
    async function fetchBlogAPI() {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch(blogAPI);
        const data = await response.json();
        const postsByUser = data.posts.filter(
          (post) => post.author.username === userData
        );
        setBlogPosts(postsByUser);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    }

    fetchBlogAPI();
  }, []);
  return (
    <div>
      {error && <ErrorMessage>An error occurred</ErrorMessage>}
      {loading ? (
        <LoadingIndicator />
      ) : (
        <PostList>
          <h1>Welcome {userData}!</h1>
          {blogPosts.map((post, index) => {
            return (
              <div key={post._id}>
                <PostPreview post={blogPosts[index]} />
              </div>
            );
          })}
        </PostList>
      )}
    </div>
  );
};

export default Home;
