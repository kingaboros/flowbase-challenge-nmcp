import React from 'react';
import { Form, Card } from 'react-bootstrap';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

import * as classes from './Auth.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';

import strings from '../../themes/strings';

const Signup = () => {
  return (
    <div>
      {/* <Card>
        <Card.Body>
          <h2>Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <ArrowBtn
              btnName={strings.buttons.loginBtn}
              btnClass={buttonClasses.loginBtn}
              arrowClass={buttonClasses.orangeArrow}
            />
          </Form>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Signup;

{
  /* <section>
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
              btnClass={buttonClasses.loginBtn}
              arrowClass={buttonClasses.orangeArrow}
            />
          </form>
        </section> */
}
