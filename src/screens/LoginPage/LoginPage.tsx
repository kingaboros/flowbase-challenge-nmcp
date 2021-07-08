import React from 'react';

import Auth from '../../components/Auth/Auth';

import * as classes from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={classes.loginPage}>
      <Auth />
    </div>
  );
};

export default LoginPage;
