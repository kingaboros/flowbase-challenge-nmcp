import React from 'react';

import SignUp from '../../components/Auth/SignUp';

import * as classes from './SignupPage.module.scss';

const SignupPage = () => {
  return (
    <div className={classes.signupPage}>
      <SignUp />
    </div>
  );
};

export default SignupPage;
