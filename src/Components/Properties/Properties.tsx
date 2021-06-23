import React from 'react';
import { FaBed, FaBath, FaHashtag } from 'react-icons/fa';

import '../Properties/Properties.scss';

const Properties = (props: any) => {
  const { description, thumbnail, rooms } = props;
  return (
    <div className="containter-fluid propertiesWrapper  col-4  ">
      <img className="imageCard" src={thumbnail} alt="properties" />
      <div className="propertiesDescription">
        <h2 className="propertiesTitle">{description}</h2>
        <div className="propertiesIconsRow">
          <div className="propertiesIcons col-xs-12">
            <div className="row">
              <div className=" propertiesIconsValues">
                <FaBed />
              </div>
              <div className="propertiesIconsValues propertiesGreyBorder">
                <p>{rooms.bedrooms}</p>
              </div>
            </div>
          </div>
          <div className="propertiesIcons col-xs-12">
            <div className="row">
              <div className="propertiesIconsValues">
                <FaBath />
              </div>
              <div className="propertiesIconsValues propertiesGreyBorder">
                <p>{rooms.bathrooms}</p>
              </div>
            </div>
          </div>
          <div className="propertiesIcons col-xs-12">
            <div className="row">
              <div className="propertiesIconsValues">
                <FaHashtag />
              </div>
              <div className="propertiesIconsValues">
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
