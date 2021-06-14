import React from 'react';
import { FaBed, FaBath, FaHashtag } from 'react-icons/fa';

import '../Properties/Properties.scss';

const Properties = (props: any) => {
  return (
    <div className="containter-fluid properties__wrapper col-4">
      <img className="card-img-top image-shadow" src={props.image} />
      <div className="properties__description">
        <h2 className="card-title properties__title">{props.title}</h2>
        <div className="row properties__icons__row">
          <div className="col-4 properties__icons">
            <div className="row">
              <div className="col-6 properties__icons__values">
                <FaBed />
              </div>
              <div className="col-6 properties__icons__values properties__grey__border">
                <p className="">{props.bedrooms}</p>
              </div>
            </div>
          </div>
          <div className="col-4 properties__icons">
            <div className="row">
              <div className="col-6 properties__icons__values">
                <FaBath />
              </div>
              <div className="col-6 properties__icons__values properties__grey__border">
                <p className="">{props.bathrooms}</p>
              </div>
            </div>
          </div>
          <div className="col-4 properties__icons">
            <div className="row">
              <div className="col-6 properties__icons__values">
                <FaHashtag />
              </div>
              <div className="col-6 properties__icons__values">
                <p className="">{props.symbol}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
