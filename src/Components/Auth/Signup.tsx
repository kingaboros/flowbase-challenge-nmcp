import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as classes from './Auth.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

import strings from '../../themes/strings';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const signupHandler = (e: any) => {};
  return (
    <div className={classes.signupForm}>
      <div className={classes.auth}>
        <Card>
          <Card.Body>
            <h2 className={classes.heading}>{strings.auth.signUpHeading}</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <ArrowBtn
                onClick={signupHandler}
                btnName={strings.buttons.signupBtn}
                btnClass={buttonClasses.loginBtn}
                arrowClass={buttonClasses.orangeArrow}
              />
            </Form>
          </Card.Body>
          <h5 className={classes.formFooter}>
            {strings.auth.haveAccount}
            <Link to="/login" className={classes.formFooterLink}>
              {strings.auth.login}
            </Link>
          </h5>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
