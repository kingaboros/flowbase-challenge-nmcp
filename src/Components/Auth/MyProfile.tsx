import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/actions';
import { useHistory } from 'react-router-dom';
import * as classes from './Auth.module.scss';

import strings from '../../themes/strings';

interface IProps {
  logOut: (email: string, pass: string) => void;
  error: string;
  login: string;
  user: string;
}

const MyProfile = (props: IProps) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const { currentUser } = action.payload.email;

  const history = useHistory();

  const handleLogOut = async (e: any) => {
    e.preventDefault();

    // try {
    //   setError('');
    //   setLoading(true);
    //   await props.logOut(email, pass);
    //   history.push('/login');
    // } catch {
    //   setError('Failed to log out');
    // }
    // setLoading(false);
  };

  return (
    <div className={classes.myProfile}>
      <div className={classes.auth}>
        <Card>
          <Card.Body>
            <h2 className={classes.heading}>{strings.auth.myProfileHeading}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>
            {/* {currentUser} */}
          </Card.Body>
        </Card>
        <Button
          disabled={loading}
          className={classes.logoutBtn}
          variant="link"
          onClick={handleLogOut}
        >
          {strings.buttons.logOutBtn}
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state.users);
  const { email } = state.users;
  return { email };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logOut: (email: string) => dispatch(logOut(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
