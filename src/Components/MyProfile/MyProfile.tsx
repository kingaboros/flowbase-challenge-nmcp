import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

import * as classes from './MyProfile.module.scss';
import * as authClasses from '../Auth/Auth.module.scss';

import strings from '../../themes/strings';

const MyProfile = () => {
  const [error, setError] = useState('');

  function handleLogout() {}

  return (
    <div className={classes.myProfile}>
      <div className={authClasses.auth}>
        <Card>
          <Card.Body>
            <h2 className={authClasses.heading}>
              {strings.auth.myProfileHeading}
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
          </Card.Body>
        </Card>
        <Button variant="link" onClick={handleLogout}>
          {strings.buttons.logOutBtn}
        </Button>
      </div>
    </div>
  );
};

export default MyProfile;
