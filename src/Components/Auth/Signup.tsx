import React, { useState } from 'react';
import { Form, Card, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp, signupSuccess } from '../../redux/actions/actions';

import * as classes from './Auth.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

import strings from '../../themes/strings';

interface IProps {
  signUp: (
    name: string,
    email: string,
    pass: string,
    passConfirm: string
  ) => void;
  error: string;
  login: string;
  user: string;
}

const SignUp = (props: IProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const signUpNameHandler = (e: any) => {
    setName(e.target.value);
  };
  const signUpEmailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const signUpPassHandler = (e: any) => {
    setPass(e.target.value);
  };

  const signUpPassConfirmHandler = (e: any) => {
    setPassConfirm(e.target.value);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (pass !== passConfirm) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await props.signUp(name, email, pass, passConfirm);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };
  // if () return <Redirect to="/login" />;
  // else
  return (
    <div className={classes.signupForm}>
      <div className={classes.auth}>
        <Card>
          <Card.Body>
            <h2 className={classes.heading}>{strings.auth.signUpHeading}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={submitHandler}>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={signUpNameHandler}
                  required
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={signUpEmailHandler}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={signUpPassHandler}
                  required
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  onChange={signUpPassConfirmHandler}
                  required
                />
              </Form.Group>
              <ArrowBtn
                disabled={loading}
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

const mapStateToProps = (state: any) => {
  const { error, login, user } = state.users;
  return { error, login, user };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signUp: (name: string, email: string, pass: string, passConfirm: string) =>
      dispatch(signUp(name, email, pass, passConfirm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
