import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        setUserData={setUserData}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            !authorizedUser ? (
              <Login setAuthorizedUser={setAuthorizedUser} setUserData={setUserData}/>
            ) : (
              <Home userData={userData} />
            )
          }
        ></Route>
        <Route
          path="/posts"
          element={
            !authorizedUser ? (
              <Login setAuthorizedUser={setAuthorizedUser} setUserData={setUserData}/>
            ) : (
              <Home userData={userData} />
            )
          }
        />
        <Route
          path="/posts/:id"
          element={
            !authorizedUser ? (
              <Login setAuthorizedUser={setAuthorizedUser} setUserData={setUserData}/>
            ) : (
              <PostEditor />
            )
          }
        />
        <Route path="/posts/create" element={<PostForm />} />
        <Route
          path="/login"
          element={<Login setAuthorizedUser={setAuthorizedUser} setUserData={setUserData}/>}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
