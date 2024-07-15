import React from 'react';
import './store-location.css';
import image6 from './assets/images/NY.jpg';
import image7 from './assets/images/LA.jpg';

function StoreLocation() {
  return (
    <div id="main-content">
      <div className="locations">

        <div className="location-panel">
          <div className="location-text">
            <h6>New York Store</h6>
            <p>Address: 123 Broadway Ave, New York, NY 10001</p>
            <p>Business Hours: Monday to Friday, 9 AM - 8 PM</p>
          </div>
          <div className="location-image">
            <img src={image6} alt="New York's daylight buildings"/>
          </div>
        </div>
        
        <div className="location-panel">
          <div className="location-text">
            <h6>California Store</h6>
            <p>Address: 456 Sunset Blvd, Los Angeles, CA 90026</p>
            <p>Business Hours: Monday to Sunday, 10 AM - 9 PM</p>
          </div>
          <div className="location-image">
            <img src={image7} alt="The road with palm trees by LA"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreLocation;
