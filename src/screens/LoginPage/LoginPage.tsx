import React from 'react';

import LogIn from '../../components/Auth/LogIn';

import * as classes from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={classes.loginPage}>
      <LogIn />
    </div>
  );
};

export default LoginPage;
