import React from 'react';
import Auth from './components/auth';
import Login from './components/login';
import LoginProvider from './context/auth';
const EditLink = (props) => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};
const DeleteLink = (props) => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};
function App() {
  return (
    <LoginProvider>
      <Login />
      <EditLink />
      <DeleteLink />
    </LoginProvider>
  );
}

export default App;
