import React from 'react';
import { FaBed, FaBath, FaHashtag } from 'react-icons/fa';

import '../Properties/Properties.scss';

const Properties = (props: any) => {
  const { description, thumbnail, rooms } = props;
  return (
    <div className="containter-fluid properties__wrapper  col-4  ">
      <img
        className="card-img-top image-shadow"
        src={thumbnail}
        alt="properties"
      />
      <div className="properties__description">
        <h2 className="card-title properties__title">{description}</h2>
        <div className="row properties__icons__row">
          <div className="col-4 col-xs-12 properties__icons">
            <div className="row">
              <div className="col-6 properties__icons__values">
                <FaBed />
              </div>
              <div className="col-6 properties__icons__values properties__grey__border">
                <p>{rooms.bedrooms}</p>
              </div>
            </div>
          </div>
          <div className="col-4 col-xs-12 properties__icons">
            <div className="row">
              <div className="col-6 properties__icons__values">
                <FaBath />
              </div>
              <div className="col-6 properties__icons__values properties__grey__border">
                <p>{rooms.bathrooms}</p>
              </div>
            </div>
          </div>
          <div className="col-4 col-xs-12 properties__icons">
            <div className="row">
              <div className="col-6 properties__icons__values">
                <FaHashtag />
              </div>
              <div className="col-6 properties__icons__values">
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
