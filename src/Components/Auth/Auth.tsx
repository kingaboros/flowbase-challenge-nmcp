import React from 'react';
import { useDispatch } from 'react-redux';

import * as classes from './Auth.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

import strings from '../../themes/strings';

// import { authActions } from '../../store/auth.js';

const Auth = () => {
  // const dispatch = useDispatch();

  // const loginHandler = (event: any) => {
  //   event.preventDefault();

  //   dispatch(authActions.login());
  // };

  return (
    <div className={classes.auth}>
      <section>
        {/* <form onSubmit={loginHandler}> */}
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <ArrowBtn
            btnName={strings.buttons.loginBtn}
            btnClass={buttonClasses.filterBtn}
            arrowClass={buttonClasses.orangeArrow}
          />
        </form>
      </section>
    </div>
  );
};

export default Auth;
