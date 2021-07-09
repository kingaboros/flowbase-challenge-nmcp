import React, { useRef } from 'react';
import { Form, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import * as classes from './Auth.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

import strings from '../../themes/strings';

const Auth = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const passwordConfirmRef = useRef('');
  return (
    <div className={classes.loginWrapper}>
      <div className={classes.auth}>
        <Card>
          <Card.Body>
            <h2 className={classes.heading}>Sign Up</h2>
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
                btnName={strings.buttons.loginBtn}
                btnClass={buttonClasses.loginBtn}
                arrowClass={buttonClasses.orangeArrow}
              />
            </Form>
          </Card.Body>
          <h5 className={classes.formFooter}>
            Already have an account?
            <span className={classes.formFooterLink}> Log in here </span>
          </h5>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
