import React from 'react';

import MyProfile from '../../components/MyProfile/MyProfile';

import * as classes from './MyProfilePage.module.scss';

const LoginPage = () => {
  return (
    <div className={classes.profilePage}>
      <MyProfile />
    </div>
  );
};

export default LoginPage;
