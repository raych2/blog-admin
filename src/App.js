import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PostForm from './components/PostForm';
import PostEditor from './components/PostEditor';

function App() {
  const [authorizedUser, setAuthorizedUser] = useState(false);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    let user = localStorage.getItem('bearer');
    let name = localStorage.getItem('name');
    if (user) {
      setAuthorizedUser(true);
      setUserData(name);
    } else {
      setAuthorizedUser(false);
      setUserData('');
    }
  }, []);

  return (
    <Router basename="/">
      <Nav
        authorizedUser={authorizedUser}
        setAuthorizedUser={setAuthorizedUser}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            !authorizedUser ? (
              <Login setAuthorizedUser={setAuthorizedUser} />
            ) : (
              <Home userData={userData} />
            )
          }
        ></Route>
        <Route
          exact
          path="/posts"
          element={
            !authorizedUser ? (
              <Login setAuthorizedUser={setAuthorizedUser} />
            ) : (
              <Home userData={userData} />
            )
          }
        />
        <Route
          exact
          path="/posts/:id"
          element={
            !authorizedUser ? (
              <Login setAuthorizedUser={setAuthorizedUser} />
            ) : (
              <PostEditor />
            )
          }
        />
        <Route exact path="/posts/create" element={<PostForm />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
