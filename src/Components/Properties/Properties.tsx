import React from 'react';
import { FaBed, FaBath, FaHashtag } from 'react-icons/fa';

import * as classes from './Properties.module.scss';

const Properties = (props: any) => {
  const { description, thumbnail, rooms } = props;
  return (
    <div className={classes.propertiesWrapper}>
      <img className={classes.imageCard} src={thumbnail} alt="properties" />
      <div className={classes.propertiesDescription}>
        <h2 className={classes.propertiesTitle}>{description}</h2>
        <div className={classes.propertiesIconsRow}>
          <div className={classes.propertiesIcons}>
            <div className={classes.row}>
              <div className={classes.propertiesIconsValues}>
                <FaBed />
              </div>
              <div className={classes.propertiesIconsValues}>
                <p>{rooms.bedrooms}</p>
              </div>
            </div>
          </div>
          <div className={classes.propertiesIcons}>
            <div className={classes.row}>
              <div className={classes.propertiesIconsValues}>
                <FaBath />
              </div>
              <div className={classes.propertiesIconsValues}>
                <p>{rooms.bathrooms}</p>
              </div>
            </div>
          </div>
          <div className={classes.propertiesIcons}>
            <div className={classes.row}>
              <div className={classes.propertiesIconsValues}>
                <FaHashtag />
              </div>
              <div className={classes.propertiesIconsValues}>
                <p>{rooms.parkingSpots}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
