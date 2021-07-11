import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as classes from './Auth.module.scss';

import strings from '../../themes/strings';

const MyProfile = (props: any) => {
  const [error, setError] = useState('');

  function handleLogOut(e: any) {
    e.preventDefault();
    props.logOut();
  }

  return (
    <div className={classes.myProfile}>
      <div className={classes.auth}>
        <Card>
          <Card.Body>
            <h2 className={classes.heading}>{strings.auth.myProfileHeading}</h2>
            {error && <Alert variant="danger">{setError}</Alert>}
          </Card.Body>
        </Card>
        <Button
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

export default MyProfile;
