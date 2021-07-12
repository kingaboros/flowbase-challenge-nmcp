import React, { useState } from 'react';
import { Form, Card, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

import { login } from '../../redux/actions/actions';
import { connect } from 'react-redux';

import * as classes from './Auth.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';

import ArrowBtn from '../ArrowBtn/ArrowBtn';
import strings from '../../themes/strings';

interface IProps {
  logIn: (email: string, pass: string) => void;
  error: string;
  login: string;
  user: string;
}

const ForgotPassword = (props: IProps) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const logInEmailHandler = (e: any) => {
    setEmail(e.target.value);
  };
  const logInPasswordHandler = (e: any) => {
    setPass(e.target.value);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await props.logIn(email, pass);
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  };

  if (props.user) return <Redirect to="/myprofile" />;
  else
    return (
      <div className={classes.loginForm}>
        <div className={classes.auth}>
          <Card>
            <Card.Body>
              <h2 className={classes.heading}>
                {strings.auth.forgotPassHeading}
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <span> {props.error}</span>
              <Form onSubmit={submitHandler}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={logInEmailHandler}
                    required
                  />
                </Form.Group>

                <ArrowBtn
                  disabled={loading}
                  btnName={strings.buttons.resetPassBtn}
                  btnClass={buttonClasses.loginBtn}
                  arrowClass={buttonClasses.orangeArrow}
                />
              </Form>
              <div className={classes.formFooter}>
                <Link to="/login" className={classes.formFooterLink}>
                  {strings.auth.login}
                </Link>
              </div>
            </Card.Body>
            <h5 className={classes.formFooter}>
              {strings.auth.noAccount}
              <Link to="/signup" className={classes.formFooterLink}>
                {strings.auth.signup}
              </Link>
            </h5>
          </Card>
        </div>
      </div>
    );
};

const mapStateToProps = (state: any) => {
  console.log(state.users);
  const { error, login, user } = state.users;
  return { error, login, user };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logIn: (email: string, password: string) =>
      dispatch(login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
